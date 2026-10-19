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

    // Event hooks & load lock
    this.onChange = null;
    this.isLoadingStarter = false;

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
    this.lastTouchTime = 0;

    this.container.addEventListener('mousedown', (e) => {
      // Ignore simulated mouse events from recent touch interactions
      if (Date.now() - this.lastTouchTime < 600) {
        return;
      }

      // If user clicked on a node, port, button, handle, or line, NEVER pan!
      if (e.target.closest && (
        e.target.closest('.eer-entity-box') || 
        e.target.closest('.eer-diamond-box') || 
        e.target.closest('circle') || 
        e.target.closest('line') || 
        e.target.closest('path') || 
        e.target.closest('g') || 
        e.target.closest('.free-line-end-handle') || 
        e.target.closest('.magnetic-end-handle') || 
        e.target.closest('.conn-port-dom-handle') || 
        e.target.closest('.magnetic-handle-group') || 
        e.target.closest('.conn-port-handle-group') || 
        e.target.closest('.line-del-btn') || 
        e.target.closest('.mult-pill') || 
        e.target.closest('.port-arrow') ||
        e.target.closest('button')
      )) {
        this.isPanning = false;
        return;
      }

      if (e.target === this.container || e.target === this.svg || e.target === this.nodesLayer || e.target === this.viewport) {
        this.deselectAll();
        this.cancelConnecting();
        this.isDraggingNode = false;
        this.draggedNode = null;
        this.draggingHandle = null;
        this.draggingFreeLine = null;
        this.draggingWholeLine = null;
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
      this.lastTouchTime = Date.now();
      if (e.touches.length === 2) {
        if (e.cancelable) e.preventDefault();
        this.isPanning = false;
        this.isDraggingNode = false;
        this.draggedNode = null;
        const t1 = e.touches[0];
        const t2 = e.touches[1];
        this.touchPinchDist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
        this.touchPinchMid = {
          x: (t1.clientX + t2.clientX) / 2,
          y: (t1.clientY + t2.clientY) / 2
        };
      } else if (e.touches.length === 1) {
        // 1 barmoq bilan diagramma aslo surilmaydi - faqat 2 barmoq bilan!
        this.isPanning = false;
        const touch = e.touches[0];
        this.lastTouchPoint = { clientX: touch.clientX, clientY: touch.clientY };
        const target = e.target;
        if (target === this.container || target === this.svg || target === this.nodesLayer || target === this.viewport) {
          this.deselectAll();
          this.cancelConnecting();
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
        if (this.isDraggingNode || this.draggingHandle || this.draggingFreeLine || this.draggingWholeLine || this.isConnecting || this.isResizing) {
          if (e.cancelable) e.preventDefault();
        }
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
    // 0. Dragging Whole Standalone Line Body (Line moves across canvas without dragging entities)
    if (this.draggingWholeLine) {
      this.isPanning = false;
      this.isDraggingNode = false;
      this.draggedNode = null;
      const world = this.screenToWorld(e.clientX, e.clientY);
      const dx = world.x - this.draggingWholeLine.grabX;
      const dy = world.y - this.draggingWholeLine.grabY;

      if (Math.hypot(dx, dy) > 4) {
        this.draggingWholeLine.moved = true;
        this.removeLineDeleteButton();
      }

      const l = this.draggingWholeLine.line;
      l.startX = Math.round(this.draggingWholeLine.startX + dx);
      l.startY = Math.round(this.draggingWholeLine.startY + dy);
      l.endX = Math.round(this.draggingWholeLine.endX + dx);
      l.endY = Math.round(this.draggingWholeLine.endY + dy);
      l.startSnapped = null;
      l.endSnapped = null;

      this.renderLinks();
      return;
    }

    // 1. Dragging Node (Entity) - MUST BE FIRST! Moves ONLY this single entity & attached lines!
    if (this.isDraggingNode && this.draggedNode) {
      this.isPanning = false;
      const world = this.screenToWorld(e.clientX, e.clientY);
      const newX = Math.round(world.x - this.dragOffsetX);
      const newY = Math.round(world.y - this.dragOffsetY);
      const dx = newX - this.draggedNode.node.x;
      const dy = newY - this.draggedNode.node.y;
      this.draggedNode.node.x = newX;
      this.draggedNode.node.y = newY;

      this.updateNodeDOMPosition(this.draggedNode.node);

      // Smoothly travel attached free-hanging lines WITH the entity
      for (const fl of this.freeLines) {
        if (fl.node && fl.node.domId === this.draggedNode.node.domId) {
          fl.endX += dx;
          fl.endY += dy;
        }
      }

      // Smoothly travel attached standalone lines WITH the entity
      for (const sl of this.standaloneLines) {
        if (sl.startSnapped?.node?.domId === this.draggedNode.node.domId && !sl.endSnapped) {
          sl.endX += dx;
          sl.endY += dy;
        } else if (sl.endSnapped?.node?.domId === this.draggedNode.node.domId && !sl.startSnapped) {
          sl.startX += dx;
          sl.startY += dy;
        }
      }

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

    // 2. Dragging Free-Standing Line End Handle (draw.io hanging line drag)
    if (this.draggingFreeLine) {
      this.isPanning = false;
      const world = this.screenToWorld(e.clientX, e.clientY);
      this.draggingFreeLine.endX = Math.round(world.x);
      this.draggingFreeLine.endY = Math.round(world.y);

      // Check magnetic snap with any other entity
      this.snapCandidate = null;
      for (const ent of this.entities) {
        if (ent.domId === this.draggingFreeLine.node.domId) continue;
        const cx = ent.x + (ent.width || 170) / 2;
        const cy = ent.y + (ent.height || 100) / 2;
        if (Math.hypot(world.x - cx, world.y - cy) < 130) {
          this.snapCandidate = { freeLine: this.draggingFreeLine, node: ent, type: 'entity' };
          break;
        }
      }

      this.renderLinks();
      return;
    }

    // 3. Handle Standalone Connector Handles
    if (this.draggingHandle) {
      this.isPanning = false;
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
      let bestCand = null;
      let bestDist = Infinity;

      for (const ent of this.entities) {
        if (this.draggingHandle.handle === 'end' && line.startSnapped?.node?.domId === ent.domId) continue;
        if (this.draggingHandle.handle === 'start' && line.endSnapped?.node?.domId === ent.domId) continue;

        const w = ent.width || 170;
        const h = ent.height || 100;
        const inBounds = world.x >= ent.x && world.x <= ent.x + w &&
                         world.y >= ent.y && world.y <= ent.y + h;
        if (inBounds) {
          bestCand = { target: ent, type: 'entity', handle: this.draggingHandle.handle, line };
          bestDist = 0;
          break;
        }

        const cx = ent.x + w / 2;
        const cy = ent.y + h / 2;
        const dist = Math.hypot(world.x - cx, world.y - cy);
        if (dist < 110 && dist < bestDist) {
          bestDist = dist;
          bestCand = { target: ent, type: 'entity', handle: this.draggingHandle.handle, line };
        }
      }

      if (!bestCand) {
        for (const rel of this.relationships) {
          const cx = rel.x + 45;
          const cy = rel.y + 45;
          const dist = Math.hypot(world.x - cx, world.y - cy);
          if (dist < 80 && dist < bestDist) {
            bestDist = dist;
            bestCand = { target: rel, type: 'diamond', handle: this.draggingHandle.handle, line };
          }
        }
      }
      this.snapCandidate = bestCand;

      this.renderLinks();
      return;
    }

    // 4. Dragging Connection Port Line (draw.io live arrow drag)
    if (this.isConnecting && this.connectSource) {
      this.isPanning = false;
      const world = this.screenToWorld(e.clientX, e.clientY);
      this.connectMovedDist = (this.connectMovedDist || 0) + Math.hypot(world.x - this.connectCurrentX, world.y - this.connectCurrentY);
      this.connectCurrentX = world.x;
      this.connectCurrentY = world.y;
      this.renderTemporaryConnectingLine();
      return;
    }

    // 5. Resizing Node (draw.io corner drag)
    if (this.isResizing && this.resizingNode) {
      this.isPanning = false;
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

    // 6. Panning canvas - ONLY if isPanning is true and NO object is being dragged!
    if (this.isPanning) {
      this.panX = e.clientX - this.startPanX;
      this.panY = e.clientY - this.startPanY;
      this.updateViewportTransform();
      return;
    }
  }

  onPointerUp(e) {
    const hadStateChange = !!(this.isDraggingNode || this.draggingHandle || this.draggingFreeLine || this.draggingWholeLine || this.isResizing || this.isConnecting);
    if (this.isPanning) {
      this.isPanning = false;
      this.container.style.cursor = 'default';
    }

    // Whole Standalone Line Dragging Release
    if (this.draggingWholeLine) {
      if (!this.draggingWholeLine.moved) {
        // Single tap/click on line shows the ✕ delete button
        const midX = (this.draggingWholeLine.line.startX + this.draggingWholeLine.line.endX) / 2;
        const midY = (this.draggingWholeLine.line.startY + this.draggingWholeLine.line.endY) / 2;
        const lineToDelete = this.draggingWholeLine.line;
        this.showLineDeleteButton(midX, midY, () => {
          this.standaloneLines = this.standaloneLines.filter(l => l.id !== lineToDelete.id);
          this.renderLinks();
          this.showToast("🗑️ Magnit chiziq o'chirildi!");
          if (window.playSfx) window.playSfx('click');
        });
      }
      this.draggingWholeLine = null;
      return;
    }

    // Free-line end dragging release
    if (this.draggingFreeLine) {
      if (this.snapCandidate && this.snapCandidate.node) {
        const targetNode = this.snapCandidate.node;
        this.completeConnection(this.draggingFreeLine.node, this.draggingFreeLine.type, targetNode, this.snapCandidate.type);
        this.freeLines = this.freeLines.filter(item => item !== this.draggingFreeLine);
        this.showToast(`🧲 Magnit: ${this.draggingFreeLine.node.name} va ${targetNode.name} muvaffaqiyatli bog'landi!`);
      } else {
        this.showToast("📍 Chiziq uchi joylashtirildi. Uni istalgan paytda boshqa entitiyga ulab olishingiz mumkin.");
      }
      this.draggingFreeLine = null;
      this.snapCandidate = null;
      this.renderLinks();
      return;
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

    // Magnetic snap execution when dragging a node
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
    if (hadStateChange) {
      this.triggerChange();
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
    const sId = sourceNode.id || sourceNode.domId;
    const tId = targetNode.id || targetNode.domId;

    const isEn = window.I18N && window.I18N.getLang() === 'en';
    const t = (k, fb) => (window.I18N ? window.I18N.t(k, fb) : fb);

    if (sId === tId) {
      if (sourceType === 'entity') {
        const existing = this.relationships.find(r => {
          if (r.fromEntityId && r.toEntityId) {
            return r.fromEntityId === sId && r.toEntityId === sId;
          }
          const fn = (r.fromEntityName || '').toLowerCase();
          const tn = (r.toEntityName || '').toLowerCase();
          const sn = (sourceNode.name || '').toLowerCase();
          return fn === sn && tn === sn;
        });
        if (existing) {
          this.showToast(isEn ? `'${sourceNode.name}' already has a recursive relationship!` : `'${sourceNode.name}' allaqachon rekursiv aloqaga ega!`);
          return;
        }
        this.relationships.push({
          id: 'rel_' + Math.random().toString(36).substr(2, 9),
          name: isEn ? 'Self-Ref' : 'Rekursiv',
          fromEntityId: sId,
          toEntityId: sId,
          fromEntityName: sourceNode.name,
          toEntityName: sourceNode.name,
          mult1: '',
          mult2: '',
          isDirect: true
        });
        this.renderLinks();
        this.triggerChange();
        if (window.playSfx) window.playSfx('success');
        this.showToast(isEn ? `🔄 Recursive relationship added to '${sourceNode.name}'!` : `🔄 '${sourceNode.name}' uchun rekursiv o'z-o'ziga bog'lanish qo'shildi!`);
        return;
      } else {
        this.showToast(t('toast_conn_self', "Rombni o'ziga ulash mumkin emas."));
        return;
      }
    }

    if (sourceType === 'entity' && targetType === 'entity') {
      const existing = this.relationships.find(r => {
        if (r.fromEntityId && r.toEntityId) {
          return (r.fromEntityId === sId && r.toEntityId === tId) || (r.fromEntityId === tId && r.toEntityId === sId);
        }
        const fn = (r.fromEntityName || '').toLowerCase();
        const tn = (r.toEntityName || '').toLowerCase();
        const sn = (sourceNode.name || '').toLowerCase();
        const targetN = (targetNode.name || '').toLowerCase();
        return (fn === sn && tn === targetN) || (fn === targetN && tn === sn);
      });
      if (existing) {
        this.showToast(isEn ? `'${sourceNode.name}' and '${targetNode.name}' are already connected!` : `'${sourceNode.name}' va '${targetNode.name}' allaqachon bog'langan!`);
        return;
      }
      this.relationships.push({
        id: 'rel_' + Math.random().toString(36).substr(2, 9),
        name: isEn ? 'Rel' : 'Aloqa',
        fromEntityId: sId,
        toEntityId: tId,
        fromEntityName: sourceNode.name,
        toEntityName: targetNode.name,
        mult1: '1..1',
        mult2: '1..*',
        isDirect: true
      });
      if (window.playSfx) window.playSfx('success');
      this.showToast(isEn ? `✅ '${sourceNode.name}' and '${targetNode.name}' successfully connected!` : `✅ '${sourceNode.name}' va '${targetNode.name}' muvaffaqiyatli bog'landi!`);
    } else if (sourceType === 'entity' && targetType === 'diamond') {
      const rel = targetNode;
      if (!rel.fromEntityName || rel.fromEntityId === sId) {
        rel.fromEntityId = sId;
        rel.fromEntityName = sourceNode.name;
      } else {
        rel.toEntityId = sId;
        rel.toEntityName = sourceNode.name;
      }
      if (window.playSfx) window.playSfx('success');
      this.showToast(isEn ? `✅ '${sourceNode.name}' and diamond connected!` : `✅ '${sourceNode.name}' va romb bog'landi!`);
    } else if (sourceType === 'diamond' && targetType === 'entity') {
      const rel = sourceNode;
      if (!rel.fromEntityName || rel.fromEntityId === tId) {
        rel.fromEntityId = tId;
        rel.fromEntityName = targetNode.name;
      } else {
        rel.toEntityId = tId;
        rel.toEntityName = targetNode.name;
      }
      if (window.playSfx) window.playSfx('success');
      this.showToast(isEn ? `✅ Diamond and '${targetNode.name}' connected!` : `✅ Romb va '${targetNode.name}' bog'landi!`);
    }
    this.renderLinks();
    this.triggerChange();
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
      const sourceId = this.connectSource.node.domId || this.connectSource.node.id;

      if (targetBox && targetBox.id !== sourceId) {
        const isTargetEntity = targetBox.classList.contains('eer-entity-box');
        const targetType = isTargetEntity ? 'entity' : 'diamond';
        const targetNode = isTargetEntity
          ? this.entities.find(ent => ent.domId === targetBox.id || ent.id === targetBox.id)
          : this.relationships.find(rel => rel.domId === targetBox.id || rel.id === targetBox.id);

        if (targetNode) {
          this.completeConnection(this.connectSource.node, this.connectSource.type, targetNode, targetType);
          this.cancelConnecting();
          return;
        }
      }

      // Fallback: search closest entity/diamond in world coordinates (never pick first random node)
      const world = this.screenToWorld(clientX, clientY);
      let bestTarget = null;
      let bestDist = Infinity;
      let bestType = 'entity';

      for (const ent of this.entities) {
        const entId = ent.domId || ent.id;
        if (entId === sourceId) continue;

        const w = ent.width || 170;
        const h = ent.height || 100;
        const inBounds = world.x >= ent.x && world.x <= ent.x + w &&
                         world.y >= ent.y && world.y <= ent.y + h;
        if (inBounds) {
          bestTarget = ent;
          bestDist = 0;
          bestType = 'entity';
          break;
        }

        const cx = ent.x + w / 2;
        const cy = ent.y + h / 2;
        const dist = Math.hypot(world.x - cx, world.y - cy);
        if (dist < 110 && dist < bestDist) {
          bestDist = dist;
          bestTarget = ent;
          bestType = 'entity';
        }
      }

      if (bestDist > 0) {
        for (const rel of this.relationships) {
          const relId = rel.domId || rel.id;
          if (relId === sourceId) continue;
          const cx = rel.x + 45;
          const cy = rel.y + 45;
          const dist = Math.hypot(world.x - cx, world.y - cy);
          if (dist < 80 && dist < bestDist) {
            bestDist = dist;
            bestTarget = rel;
            bestType = 'diamond';
          }
        }
      }

      if (bestTarget) {
        this.completeConnection(this.connectSource.node, this.connectSource.type, bestTarget, bestType);
        this.cancelConnecting();
        return;
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
    this.isPanning = false;
    this.draggingFreeLine = null;
    this.draggingHandle = null;

    if (this.isConnecting && this.connectSource) {
      const srcId = this.connectSource.node.domId || this.connectSource.node.id;
      const targetId = node.domId || node.id;
      if (srcId !== targetId) {
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

    let baseName = data.name || 'Entitiy';
    let uniqueName = baseName;
    let counter = 2;
    while (this.entities.some(e => e.name.toLowerCase() === uniqueName.toLowerCase())) {
      uniqueName = `${baseName}_${counter}`;
      counter++;
    }

    const entity = {
      id: id,
      domId: id,
      name: uniqueName,
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
    this.triggerChange();
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
      const isEn = window.I18N && window.I18N.getLang() === 'en';
      const promptAttr = window.I18N ? window.I18N.t('prompt_attr_name', "Yangi atribut nomini kiriting:") : "Yangi atribut nomini kiriting:";
      const attrName = prompt(promptAttr, isEn ? "new_attribute" : "yangi_atribut");
      if (attrName) {
        entity.attributes.push({ name: attrName.trim(), isPK: false });
        this.renderEntityAttributes(entity, el.querySelector('.entity-attributes'));
        this.renderLinks();
        this.triggerChange();
      }
    });

    el.querySelector('[data-action="edit-name"]')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const promptName = window.I18N ? window.I18N.t('prompt_rename_entity', "Entitiy nomini o'zgartiring:") : "Entitiy nomini o'zgartiring:";
      const newName = prompt(promptName, entity.name);
      if (newName) {
        const oldName = entity.name;
        entity.name = newName.trim();
        el.querySelector('.entity-title-text').textContent = entity.name;
        this.relationships.forEach(r => {
          if (r.fromEntityId === entity.id || r.fromEntityId === entity.domId || r.fromEntityName === oldName) r.fromEntityName = entity.name;
          if (r.toEntityId === entity.id || r.toEntityId === entity.domId || r.toEntityName === oldName) r.toEntityName = entity.name;
        });
        this.renderLinks();
        this.triggerChange();
      }
    });

    el.querySelector('[data-action="toggle-weak"]')?.addEventListener('click', (e) => {
      e.stopPropagation();
      entity.isWeak = !entity.isWeak;
      if (entity.isWeak) el.classList.add('weak-entity');
      else el.classList.remove('weak-entity');
      this.triggerChange();
    });

    el.querySelector('[data-action="del-node"]')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isEn = window.I18N && window.I18N.getLang() === 'en';
      const confirmDelete = isEn ? `Delete entity '${entity.name}'?` : `'${entity.name}' entitiysini o'chirishni xohlaysizmi?`;
      if (confirm(confirmDelete)) {
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
      row.className = `attr-item ${attr.isPK ? 'is-pk' : ''} ${attr.isFK ? 'is-fk' : ''}`;

      let badgeLabel = 'Oddiy';
      let badgeClass = 'plain-pill';
      if (attr.isPK && attr.isFK) {
        badgeLabel = 'PK, FK';
        badgeClass = 'pkfk-pill';
      } else if (attr.isPK) {
        badgeLabel = 'PK';
        badgeClass = 'pk-pill';
      } else if (attr.isFK) {
        badgeLabel = 'FK';
        badgeClass = 'fk-pill';
      } else if (attr.isPPK) {
        badgeLabel = 'PPK';
        badgeClass = 'ppk-pill';
      }

      row.innerHTML = `
        <span class="attr-name" contenteditable="true" spellcheck="false" title="Nomini o'zgartirish">${attr.name}</span>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="btn-attr-badge ${badgeClass}" title="Kalit turini o'zgartirish (Oddiy → PK → FK → PK,FK → PPK)">${badgeLabel}</button>
          <button class="btn-attr-edit" title="Nomini o'zgartirish">✎</button>
          <button class="btn-attr-del" title="Atributni o'chirish">✕</button>
        </div>
      `;

      const nameEl = row.querySelector('.attr-name');
      const editBtn = row.querySelector('.btn-attr-edit');

      const triggerRename = (e) => {
        e?.stopPropagation();
        const isEn = window.I18N && window.I18N.getLang() === 'en';
        const promptAttr = window.I18N ? window.I18N.t('prompt_rename_attr', "Atribut nomini kiriting:") : "Atribut nomini kiriting:";
        const newName = prompt(promptAttr, attr.name);
        if (newName && newName.trim()) {
          attr.name = newName.trim();
          nameEl.textContent = attr.name;
          this.renderLinks();
          this.triggerChange();
        }
      };

      editBtn?.addEventListener('click', triggerRename);
      nameEl.addEventListener('click', triggerRename);
      nameEl.addEventListener('dblclick', triggerRename);

      nameEl.addEventListener('blur', () => {
        const oldName = attr.name;
        attr.name = nameEl.textContent.trim() || attr.name;
        if (attr.name !== oldName) this.triggerChange();
      });
      nameEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          nameEl.blur();
        }
      });

      // Toggle PK / FK / PK,FK / PPK / none (Works on touch and click)
      const badgeBtn = row.querySelector('.btn-attr-badge');
      let lastToggleTime = 0;
      const toggleBadge = (e) => {
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        const now = Date.now();
        if (now - lastToggleTime < 300) return; // Prevent double trigger from touchend + click
        lastToggleTime = now;

        if (attr.isPK && attr.isFK) {
          // Was PK, FK -> toggle to PPK
          attr.isPK = false;
          attr.isFK = false;
          attr.isPPK = true;
        } else if (attr.isFK) {
          // Was FK -> toggle to PK, FK
          attr.isPK = true;
          attr.isFK = true;
          attr.isPPK = false;
        } else if (attr.isPK) {
          // Was PK -> toggle to FK
          attr.isPK = false;
          attr.isFK = true;
          attr.isPPK = false;
        } else if (attr.isPPK) {
          // Was PPK -> toggle to Oddiy
          attr.isPK = false;
          attr.isFK = false;
          attr.isPPK = false;
        } else {
          // Was Oddiy -> toggle to PK
          attr.isPK = true;
          attr.isFK = false;
          attr.isPPK = false;
        }
        this.renderEntityAttributes(entity, containerEl);
        this.renderLinks();
        this.triggerChange();
        if (window.playSfx) window.playSfx('click');
      };

      badgeBtn?.addEventListener('click', toggleBadge);
      badgeBtn?.addEventListener('touchend', toggleBadge);

      row.querySelector('.btn-attr-del')?.addEventListener('click', (e) => {
        e.stopPropagation();
        entity.attributes.splice(idx, 1);
        this.renderEntityAttributes(entity, containerEl);
        this.renderLinks();
        this.triggerChange();
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

    this.relationships = this.relationships.filter(r => {
      const isConnected = (r.fromEntityId === entity.id || r.fromEntityId === entity.domId || r.fromEntityName === entity.name ||
                           r.toEntityId === entity.id || r.toEntityId === entity.domId || r.toEntityName === entity.name);
      return !(r.isDirect && isConnected);
    });

    this.relationships.forEach(r => {
      if (r.fromEntityId === entity.id || r.fromEntityId === entity.domId || r.fromEntityName === entity.name) {
        r.fromEntityName = '';
        r.fromEntityId = null;
      }
      if (r.toEntityId === entity.id || r.toEntityId === entity.domId || r.toEntityName === entity.name) {
        r.toEntityName = '';
        r.toEntityId = null;
      }
    });
    this.renderLinks();
    this.triggerChange();
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
    this.triggerChange();
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
      const promptRel = window.I18N ? window.I18N.t('prompt_rename_rel', "Aloqa nomini o'zgartiring:") : "Aloqa nomini o'zgartiring:";
      const newName = prompt(promptRel, rel.name);
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
    this.triggerChange();
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
    this.nodesLayer.querySelectorAll('.mult-pill, .rel-line-badge, .free-line-end-handle, .magnetic-end-handle, .conn-port-dom-handle').forEach(p => p.remove());

    this.relationships.forEach(rel => {
      const fromEnt = this.entities.find(e => (rel.fromEntityId && (e.id === rel.fromEntityId || e.domId === rel.fromEntityId))) ||
                      this.entities.find(e => e.name.toLowerCase() === (rel.fromEntityName || '').toLowerCase());
      const toEnt = this.entities.find(e => (rel.toEntityId && (e.id === rel.toEntityId || e.domId === rel.toEntityId))) ||
                    this.entities.find(e => e.name.toLowerCase() === (rel.toEntityName || '').toLowerCase());

      const diamondEl = document.getElementById(rel.domId);
      const isDirectLine = rel.isDirect || !diamondEl;

      if (isDirectLine && fromEnt && toEnt) {
        if (fromEnt === toEnt) {
          // Recursive / Unary Self-Loop
          const onDblClickRel = (e) => {
            e?.stopPropagation();
            this.relationships = this.relationships.filter(r => r !== rel);
            this.renderLinks();
            this.showToast(`🗑️ '${fromEnt.name}' rekursiv aloqasi o'chirildi!`);
            if (window.playSfx) window.playSfx('click');
          };

          const multLabel = `${rel.mult1 || '1..1'} ↔ ${rel.mult2 || '1..*'}`;
          this.drawSelfLoopArc(fromEnt, rel, onDblClickRel, {
            onDelete: onDblClickRel,
            onMultiplicity: (e) => this.openMultiplicitySelector(rel, 'mult1', e),
            multText: multLabel
          });
        } else {
          // Direct Entity-to-Entity relationship line (No diamond)
          const fCenterX = fromEnt.x + (fromEnt.width || 200) / 2;
          const fCenterY = fromEnt.y + (fromEnt.height || 120) / 2;
          const tCenterX = toEnt.x + (toEnt.width || 200) / 2;
          const tCenterY = toEnt.y + (toEnt.height || 120) / 2;

        const borderF = this.getNodeBorderPoint(fromEnt, tCenterX, tCenterY, false);
        const borderT = this.getNodeBorderPoint(toEnt, fCenterX, fCenterY, false);

        const onDblClickRel = (e) => {
          e?.stopPropagation();
          this.relationships = this.relationships.filter(r => r !== rel);
          this.renderLinks();
          this.showToast(`🗑️ '${fromEnt.name}' va '${toEnt.name}' aloqa chizig'i o'chirildi!`);
          if (window.playSfx) window.playSfx('click');
        };

        const multLabel = `${rel.mult1 || '1..1'} ↔ ${rel.mult2 || '1..*'}`;
        this.drawLine(borderF.x, borderF.y, borderT.x, borderT.y, onDblClickRel, false, null, {
          onDelete: onDblClickRel,
          onMultiplicity: (e) => this.openMultiplicitySelector(rel, 'mult1', e),
          multText: multLabel
        });

        // Handles at both ends to allow grabbing and re-attaching
        const onStartHandleDrag = (e) => {
          e.stopPropagation();
          if (e.cancelable) e.preventDefault();
          this.isPanning = false;
          this.isDraggingNode = false;
          this.draggedNode = null;
          this.relationships = this.relationships.filter(r => r !== rel);
          const newLine = {
            id: 'sline_' + Math.random().toString(36).substr(2, 9),
            startX: Math.round(borderF.x),
            startY: Math.round(borderF.y),
            endX: Math.round(borderT.x),
            endY: Math.round(borderT.y),
            mult1: rel.mult1 || '1..1',
            mult2: rel.mult2 || '1..*',
            startSnapped: null,
            endSnapped: { node: toEnt, type: 'entity' }
          };
          this.standaloneLines.push(newLine);
          this.draggingHandle = { line: newLine, handle: 'start' };
          this.renderLinks();
        };

        const onEndHandleDrag = (e) => {
          e.stopPropagation();
          if (e.cancelable) e.preventDefault();
          this.isPanning = false;
          this.isDraggingNode = false;
          this.draggedNode = null;
          this.relationships = this.relationships.filter(r => r !== rel);
          const newLine = {
            id: 'sline_' + Math.random().toString(36).substr(2, 9),
            startX: Math.round(borderF.x),
            startY: Math.round(borderF.y),
            endX: Math.round(borderT.x),
            endY: Math.round(borderT.y),
            mult1: rel.mult1 || '1..1',
            mult2: rel.mult2 || '1..*',
            startSnapped: { node: fromEnt, type: 'entity' },
            endSnapped: null
          };
          this.standaloneLines.push(newLine);
          this.draggingHandle = { line: newLine, handle: 'end' };
          this.renderLinks();
        };

        const dx = borderT.x - borderF.x;
        const dy = borderT.y - borderF.y;
        const lineLen = Math.hypot(dx, dy) || 1;
        const hFx = borderF.x + (dx / lineLen) * 18;
        const hFy = borderF.y + (dy / lineLen) * 18;
        const hTx = borderT.x - (dx / lineLen) * 18;
        const hTy = borderT.y - (dy / lineLen) * 18;

        this.renderConnectionPortHandle(hFx, hFy, onStartHandleDrag, onDblClickRel);
        this.renderConnectionPortHandle(hTx, hTy, onEndHandleDrag, onDblClickRel);

        // 1. Multiplicity for fromEnt (positioned cleanly ABOVE/OUTSIDE the connector line)
        const mPos1 = this.computeMultiplicityPos(borderF, 38, 18);
        this.createMultiplicityPill(mPos1.x, mPos1.y, rel, 'mult1', fromEnt.name);

        // 2. Multiplicity for toEnt (positioned cleanly ABOVE/OUTSIDE the connector line)
        const mPos2 = this.computeMultiplicityPos(borderT, 38, 18);
        this.createMultiplicityPill(mPos2.x, mPos2.y, rel, 'mult2', toEnt.name);
        }
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
              rel.fromEntityId = null;
              this.renderLinks();
              if (window.playSfx) window.playSfx('click');
            }
          };

          this.drawLine(borderF.x, borderF.y, borderR1.x, borderR1.y, onDblClickFrom, false, null, {
            onDelete: onDblClickFrom,
            onMultiplicity: (e) => this.openMultiplicitySelector(rel, 'mult1', e),
            multText: rel.mult1 || '1..1'
          });
          const mPos1 = this.computeMultiplicityPos(borderF, 38, 18);
          this.createMultiplicityPill(mPos1.x, mPos1.y, rel, 'mult1', fromEnt.name);
        }

        if (toEnt) {
          const tCenterX = toEnt.x + (toEnt.width || 200) / 2;
          const tCenterY = toEnt.y + (toEnt.height || 120) / 2;
          const borderT = this.getNodeBorderPoint(toEnt, rCenterX, rCenterY, false);
          const borderR2 = this.getNodeBorderPoint(rel, tCenterX, tCenterY, true);

          const onDblClickTo = () => {
            if (confirm(`'${rel.name}' va '${toEnt.name}' o'rtasidagi bog'lanish chizig'ini o'chirishni xohlaysizmi?`)) {
              rel.toEntityName = '';
              rel.toEntityId = null;
              this.renderLinks();
              if (window.playSfx) window.playSfx('click');
            }
          };

          this.drawLine(borderR2.x, borderR2.y, borderT.x, borderT.y, onDblClickTo, false, null, {
            onDelete: onDblClickTo,
            onMultiplicity: (e) => this.openMultiplicitySelector(rel, 'mult2', e),
            multText: rel.mult2 || '1..*'
          });
          const mPos2 = this.computeMultiplicityPos(borderT, 38, 18);
          this.createMultiplicityPill(mPos2.x, mPos2.y, rel, 'mult2', toEnt.name);
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

      const onLineDblClick = (e) => {
        e?.stopPropagation();
        this.standaloneLines = this.standaloneLines.filter(l => l.id !== line.id);
        this.renderLinks();
        this.showToast("🗑️ Magnit chiziq o'chirildi!");
        if (window.playSfx) window.playSfx('click');
      };

      const onStartWholeLineDrag = (e) => {
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        this.isPanning = false;
        this.isDraggingNode = false;
        this.draggedNode = null;
        this.draggingHandle = null;
        this.draggingFreeLine = null;

        const pt = e.touches ? e.touches[0] : e;
        const world = this.screenToWorld(pt.clientX, pt.clientY);

        this.draggingWholeLine = {
          line,
          startX: line.startX,
          startY: line.startY,
          endX: line.endX,
          endY: line.endY,
          grabX: world.x,
          grabY: world.y,
          moved: false
        };
      };

      const multLabel = `${line.mult1 || '1..1'} ↔ ${line.mult2 || '1..*'}`;
      this.drawLine(line.startX, line.startY, line.endX, line.endY, onLineDblClick, line.isDashed, onStartWholeLineDrag, {
        onDelete: onLineDblClick,
        onMultiplicity: (e) => this.openMultiplicitySelector(line, 'mult1', e),
        multText: multLabel
      });

      // Render Magnetic Handles at both ends as interactive DOM handles
      this.renderMagneticHandle(line, 'start', line.startX, line.startY, onLineDblClick);
      this.renderMagneticHandle(line, 'end', line.endX, line.endY, onLineDblClick);

      // Render Multiplicity Pills for standalone line ends
      const dx = line.endX - line.startX;
      const dy = line.endY - line.startY;
      const dist = Math.hypot(dx, dy) || 1;
      const dirX = dx / dist;
      const dirY = dy / dist;

      // Start end multiplicity pill
      const startBorder = { x: line.startX, y: line.startY, dirX: dirX, dirY: dirY };
      const mPos1 = this.computeMultiplicityPos(startBorder, 38, 22);
      this.createMultiplicityPill(mPos1.x, mPos1.y, line, 'mult1', line.startSnapped?.node?.name || '1-Tomon');

      // End end multiplicity pill
      const endBorder = { x: line.endX, y: line.endY, dirX: -dirX, dirY: -dirY };
      const mPos2 = this.computeMultiplicityPos(endBorder, 38, 22);
      this.createMultiplicityPill(mPos2.x, mPos2.y, line, 'mult2', line.endSnapped?.node?.name || '2-Tomon');
    });

    // Render Free-Standing Connection Lines
    this.freeLines = this.freeLines.filter(fl => {
      return this.entities.some(e => e.domId === fl.node.domId) || this.relationships.some(r => r.domId === fl.node.domId);
    });

    this.freeLines.forEach((fl, idx) => {
      const start = this.getPortCoords(fl.node, fl.port);
      const onFreeDblClick = (e) => {
        e?.stopPropagation();
        this.freeLines.splice(idx, 1);
        this.renderLinks();
        this.showToast("🗑️ Erkin chiziq o'chirildi!");
        if (window.playSfx) window.playSfx('click');
      };

      const onStartFreeLineDrag = (e) => {
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        this.isPanning = false;
        this.isDraggingNode = false;
        this.draggedNode = null;
        this.draggingHandle = null;
        this.draggingWholeLine = null;
        this.draggingFreeLine = fl;
      };

      this.drawLine(start.x, start.y, fl.endX, fl.endY, onFreeDblClick, false, onStartFreeLineDrag);
      this.renderFreeLineHandle(fl, onFreeDblClick);
    });
  }

  renderFreeLineHandle(fl, onDelete) {
    const isSnapped = this.snapCandidate && this.snapCandidate.freeLine === fl;
    const handle = document.createElement('div');
    handle.className = `free-line-end-handle ${isSnapped ? 'snap-highlight' : ''}`;
    handle.style.position = 'absolute';
    handle.style.left = `${fl.endX}px`;
    handle.style.top = `${fl.endY}px`;
    handle.style.transform = 'translate(-50%, -50%)';
    handle.style.width = '30px';
    handle.style.height = '30px';
    handle.style.borderRadius = '50%';
    handle.style.background = isSnapped ? '#06d6a0' : '#ffd166';
    handle.style.border = isSnapped ? '3px solid #049f75' : '3px solid #1e1916';
    handle.style.boxShadow = isSnapped ? '0 0 16px rgba(6,214,160,0.95)' : '0 0 10px rgba(255,209,102,0.85)';
    handle.style.cursor = 'grab';
    handle.style.zIndex = '50';
    handle.style.pointerEvents = 'auto';
    handle.style.touchAction = 'none';
    handle.style.display = 'flex';
    handle.style.alignItems = 'center';
    handle.style.justifyContent = 'center';
    handle.title = "Chiziq uchi: tortib entitiyga ulang, bosib '✕' orqali o'chiring";
    handle.innerHTML = `<span style="font-size:14px; color:#1e1916; font-weight:bold; pointer-events:none; user-select:none;">●</span>`;

    const startDragHandle = (e) => {
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      this.isPanning = false;
      this.isDraggingNode = false;
      this.draggedNode = null;
      this.draggingHandle = null;
      this.draggingWholeLine = null;
      this.draggingFreeLine = fl;
    };

    handle.addEventListener('mousedown', startDragHandle);
    handle.addEventListener('touchstart', startDragHandle, { passive: false });

    handle.addEventListener('click', (e) => {
      e.stopPropagation();
      this.showLineDeleteButton(fl.endX, fl.endY, onDelete);
    });

    handle.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      this.removeLineDeleteButton();
      onDelete(e);
    });

    let lastTap = 0;
    handle.addEventListener('touchend', (e) => {
      const now = Date.now();
      if (now - lastTap < 350 && now - lastTap > 0) {
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        this.removeLineDeleteButton();
        onDelete(e);
      } else {
        this.showLineDeleteButton(fl.endX, fl.endY, onDelete);
      }
      lastTap = now;
    }, { passive: false });

    this.nodesLayer.appendChild(handle);
  }

  renderMagneticHandle(line, handleName, x, y, onDelete) {
    const isSnapped = this.snapCandidate && this.snapCandidate.line === line && this.snapCandidate.handle === handleName;
    const handle = document.createElement('div');
    handle.className = `magnetic-end-handle ${isSnapped ? 'snap-highlight' : ''}`;
    handle.style.position = 'absolute';
    handle.style.left = `${x}px`;
    handle.style.top = `${y}px`;
    handle.style.transform = 'translate(-50%, -50%)';
    handle.style.width = '30px';
    handle.style.height = '30px';
    handle.style.borderRadius = '50%';
    handle.style.background = isSnapped ? '#06d6a0' : '#ffd166';
    handle.style.border = isSnapped ? '3px solid #049f75' : '3px solid #1e1916';
    handle.style.boxShadow = isSnapped ? '0 0 16px rgba(6,214,160,0.95)' : '0 0 10px rgba(255,209,102,0.85)';
    handle.style.cursor = 'grab';
    handle.style.zIndex = '50';
    handle.style.pointerEvents = 'auto';
    handle.style.touchAction = 'none';
    handle.style.display = 'flex';
    handle.style.alignItems = 'center';
    handle.style.justifyContent = 'center';
    handle.title = "Magnit uchi: tortib entitiyga ulang, bosib '✕' orqali o'chiring";
    handle.innerHTML = `<span style="font-size:14px; color:#1e1916; font-weight:bold; pointer-events:none; user-select:none;">●</span>`;

    const startDragHandle = (e) => {
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      this.isPanning = false;
      this.isDraggingNode = false;
      this.draggedNode = null;
      this.draggingFreeLine = null;
      this.draggingWholeLine = null;
      this.draggingHandle = { line, handle: handleName };
    };

    handle.addEventListener('mousedown', startDragHandle);
    handle.addEventListener('touchstart', startDragHandle, { passive: false });

    handle.addEventListener('click', (e) => {
      e.stopPropagation();
      this.showLineDeleteButton(x, y, onDelete);
    });

    handle.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      this.removeLineDeleteButton();
      onDelete(e);
    });

    let lastTap = 0;
    handle.addEventListener('touchend', (e) => {
      const now = Date.now();
      if (now - lastTap < 350 && now - lastTap > 0) {
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        this.removeLineDeleteButton();
        onDelete(e);
      } else {
        this.showLineDeleteButton(x, y, onDelete);
      }
      lastTap = now;
    }, { passive: false });

    this.nodesLayer.appendChild(handle);
  }

  renderConnectionPortHandle(x, y, onDragStart, onDelete) {
    const handle = document.createElement('div');
    handle.className = 'conn-port-dom-handle';
    handle.style.position = 'absolute';
    handle.style.left = `${Math.round(x)}px`;
    handle.style.top = `${Math.round(y)}px`;
    handle.style.transform = 'translate(-50%, -50%)';
    handle.style.width = '24px';
    handle.style.height = '24px';
    handle.style.borderRadius = '50%';
    handle.style.background = '#ffd166';
    handle.style.border = '2.5px solid #1e1916';
    handle.style.boxShadow = '0 0 8px rgba(255,209,102,0.8)';
    handle.style.cursor = 'grab';
    handle.style.zIndex = '45';
    handle.style.pointerEvents = 'auto';
    handle.style.touchAction = 'none';
    handle.style.display = 'flex';
    handle.style.alignItems = 'center';
    handle.style.justifyContent = 'center';
    handle.title = "Ulanish nuqtasi: tortib boshqa entitiyga ko'chiring, 2 marta bosib o'chiring";
    handle.innerHTML = `<span style="font-size:11px; color:#1e1916; font-weight:bold; pointer-events:none; user-select:none;">●</span>`;

    const handleStartDrag = (e) => {
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      this.isPanning = false;
      this.isDraggingNode = false;
      this.draggedNode = null;
      if (onDragStart) onDragStart(e);
    };

    handle.addEventListener('mousedown', handleStartDrag);
    handle.addEventListener('touchstart', handleStartDrag, { passive: false });

    handle.addEventListener('click', (e) => {
      e.stopPropagation();
      this.showLineDeleteButton(x, y, onDelete);
    });

    handle.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      this.removeLineDeleteButton();
      if (onDelete) onDelete(e);
    });

    let lastTap = 0;
    handle.addEventListener('touchend', (e) => {
      const now = Date.now();
      if (now - lastTap < 350 && now - lastTap > 0) {
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        this.removeLineDeleteButton();
        if (onDelete) onDelete(e);
      } else {
        this.showLineDeleteButton(x, y, onDelete);
      }
      lastTap = now;
    }, { passive: false });

    this.nodesLayer.appendChild(handle);
  }

  computeMultiplicityPos(border, alongDist = 42, perpDist = 24) {
    let normX = -border.dirY;
    let normY = border.dirX;
    // Guarantee multiplicity pill floats cleanly ABOVE the line (normY negative)
    if (normY > 0) {
      normX = -normX;
      normY = -normY;
    } else if (Math.abs(normY) <= 0.05 && normX < 0) {
      normX = -normX;
      normY = -normY;
    }
    return {
      x: Math.round(border.x + border.dirX * alongDist + normX * perpDist),
      y: Math.round(border.y + border.dirY * alongDist + normY * perpDist)
    };
  }

  showLineActionToolbar(midX, midY, actionOptions) {
    this.removeLineDeleteButton();
    const opts = typeof actionOptions === 'function' ? { onDelete: actionOptions } : (actionOptions || {});

    const toolbar = document.createElement('div');
    toolbar.className = 'line-action-toolbar line-del-btn';
    toolbar.style.position = 'absolute';
    toolbar.style.left = `${Math.round(midX)}px`;
    toolbar.style.top = `${Math.round(midY)}px`;
    toolbar.style.transform = 'translate(-50%, -50%)';
    toolbar.style.zIndex = '1000';
    toolbar.style.pointerEvents = 'auto';

    let html = '';
    if (opts.onMultiplicity) {
      html += `<button type="button" class="line-action-mult-btn" title="Multiplicityni o'zgartirish">⚙️ Multiplicity ${opts.multText ? `(${opts.multText})` : ''}</button>`;
    }
    if (opts.onDelete) {
      html += `<button type="button" class="line-action-del-btn" title="Chiziqni o'chirish">🗑️ O'chirish (✕)</button>`;
    }
    toolbar.innerHTML = html;

    if (opts.onMultiplicity) {
      const btnMult = toolbar.querySelector('.line-action-mult-btn');
      const handleMult = (e) => {
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        toolbar.remove();
        opts.onMultiplicity(e);
      };
      btnMult?.addEventListener('click', handleMult);
      btnMult?.addEventListener('touchend', handleMult, { passive: false });
    }

    if (opts.onDelete) {
      const btnDel = toolbar.querySelector('.line-action-del-btn');
      const handleDelete = (e) => {
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        toolbar.remove();
        opts.onDelete(e);
      };
      btnDel?.addEventListener('click', handleDelete);
      btnDel?.addEventListener('touchend', handleDelete, { passive: false });
    }

    this.nodesLayer.appendChild(toolbar);

    const outsideListener = (e) => {
      if (e.target !== toolbar && !toolbar.contains(e.target)) {
        toolbar.remove();
        window.removeEventListener('mousedown', outsideListener);
        window.removeEventListener('touchstart', outsideListener);
      }
    };
    setTimeout(() => {
      window.addEventListener('mousedown', outsideListener);
      window.addEventListener('touchstart', outsideListener);
    }, 150);
  }

  showLineDeleteButton(midX, midY, onDeleteOrOpts) {
    this.showLineActionToolbar(midX, midY, onDeleteOrOpts);
  }

  removeLineDeleteButton() {
    if (!this.nodesLayer) return;
    this.nodesLayer.querySelectorAll('.line-del-btn, .line-action-toolbar').forEach(b => b.remove());
  }

  drawLine(x1, y1, x2, y2, onDelete = null, isDashed = false, onStartDrag = null, lineActions = null) {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    // Solid invisible-opacity thick hitbox for touch & mouse (32px wide)
    const hitbox = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    hitbox.setAttribute('x1', x1);
    hitbox.setAttribute('y1', y1);
    hitbox.setAttribute('x2', x2);
    hitbox.setAttribute('y2', y2);
    hitbox.setAttribute('stroke', '#000000');
    hitbox.setAttribute('stroke-opacity', '0.001');
    hitbox.setAttribute('stroke-width', '32');
    hitbox.style.cursor = onStartDrag ? 'grab' : 'pointer';
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
    line.style.cursor = onStartDrag ? 'grab' : 'pointer';
    line.style.pointerEvents = 'stroke';

    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;

    const stopBubblingAndPreventDrag = (e) => {
      e.stopPropagation();
      this.isPanning = false;
      this.isDraggingNode = false;
      this.draggedNode = null;
    };

    if (onStartDrag) {
      hitbox.addEventListener('mousedown', onStartDrag);
      hitbox.addEventListener('touchstart', onStartDrag, { passive: false });
    } else {
      hitbox.addEventListener('mousedown', stopBubblingAndPreventDrag);
      hitbox.addEventListener('touchstart', stopBubblingAndPreventDrag, { passive: false });
    }

    if (onDelete || lineActions) {
      const actions = lineActions || { onDelete };
      // Single click / tap shows action toolbar (Multiplicity + Delete)
      const handleClick = (e) => {
        e.stopPropagation();
        this.showLineActionToolbar(midX, midY, actions);
      };

      hitbox.addEventListener('click', handleClick);
      line.addEventListener('click', handleClick);

      // Double click immediately deletes the line
      if (onDelete) {
        hitbox.addEventListener('dblclick', (e) => {
          e.stopPropagation();
          this.removeLineDeleteButton();
          onDelete(e);
        });
        line.addEventListener('dblclick', (e) => {
          e.stopPropagation();
          this.removeLineDeleteButton();
          onDelete(e);
        });
      }

      let lastTap = 0;
      const handleTap = (e) => {
        const curTime = Date.now();
        const tapInterval = curTime - lastTap;
        if (tapInterval < 350 && tapInterval > 0) {
          e.stopPropagation();
          if (e.cancelable) e.preventDefault();
          this.removeLineDeleteButton();
          if (onDelete) onDelete(e);
        } else {
          this.showLineActionToolbar(midX, midY, actions);
        }
        lastTap = curTime;
      };
      hitbox.addEventListener('touchend', handleTap, { passive: false });
      line.addEventListener('touchend', handleTap, { passive: false });
    }

    group.appendChild(hitbox);
    group.appendChild(line);
    this.svg.appendChild(group);
  }

  drawSelfLoopArc(fromEnt, rel, onDelete, lineActions) {
    const width = fromEnt.width || 200;
    const height = fromEnt.height || 120;
    const startX = Math.round(fromEnt.x + width * 0.70);
    const startY = Math.round(fromEnt.y);
    const endX = Math.round(fromEnt.x + width);
    const endY = Math.round(fromEnt.y + height * 0.35);

    const cp1x = startX;
    const cp1y = startY - 55;
    const cp2x = endX + 55;
    const cp2y = endY;

    const pathD = `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;
    const midX = Math.round(0.125 * startX + 0.375 * cp1x + 0.375 * cp2x + 0.125 * endX);
    const midY = Math.round(0.125 * startY + 0.375 * cp1y + 0.375 * cp2y + 0.125 * endY);

    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    // Invisible thick hitbox (32px wide)
    const hitbox = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    hitbox.setAttribute('d', pathD);
    hitbox.setAttribute('fill', 'none');
    hitbox.setAttribute('stroke', '#000000');
    hitbox.setAttribute('stroke-opacity', '0.001');
    hitbox.setAttribute('stroke-width', '32');
    hitbox.style.cursor = 'pointer';
    hitbox.style.pointerEvents = 'stroke';

    // Visible arc
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathD);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', '#c8a96e');
    path.setAttribute('stroke-width', '2.5');
    path.setAttribute('stroke-linecap', 'round');
    path.style.cursor = 'pointer';
    path.style.pointerEvents = 'stroke';

    const stopBubbling = (e) => {
      e.stopPropagation();
      this.isPanning = false;
      this.isDraggingNode = false;
      this.draggedNode = null;
    };
    hitbox.addEventListener('mousedown', stopBubbling);
    hitbox.addEventListener('touchstart', stopBubbling, { passive: false });

    if (onDelete || lineActions) {
      const actions = lineActions || { onDelete };
      const handleClick = (e) => {
        e.stopPropagation();
        this.showLineActionToolbar(midX, midY, actions);
      };
      hitbox.addEventListener('click', handleClick);
      path.addEventListener('click', handleClick);

      if (onDelete) {
        hitbox.addEventListener('dblclick', (e) => {
          e.stopPropagation();
          this.removeLineDeleteButton();
          onDelete(e);
        });
        path.addEventListener('dblclick', (e) => {
          e.stopPropagation();
          this.removeLineDeleteButton();
          onDelete(e);
        });
      }
    }

    group.appendChild(hitbox);
    group.appendChild(path);
    this.svg.appendChild(group);

    // Multiplicity 1 (start at top border)
    this.createMultiplicityPill(startX - 15, startY - 26, rel, 'mult1', rel.role1 ? `${fromEnt.name} (${rel.role1})` : fromEnt.name);

    // Multiplicity 2 (end at right border)
    this.createMultiplicityPill(endX + 32, endY, rel, 'mult2', rel.role2 ? `${fromEnt.name} (${rel.role2})` : fromEnt.name);

    // Optional Role / Name Badge near apex
    if (rel.name) {
      const badge = document.createElement('div');
      badge.className = 'rel-line-badge';
      badge.textContent = rel.name;
      badge.style.position = 'absolute';
      badge.style.left = `${midX + 15}px`;
      badge.style.top = `${midY - 15}px`;
      badge.style.transform = 'translate(-50%, -50%)';
      badge.style.fontSize = '11px';
      badge.style.fontWeight = 'bold';
      badge.style.color = '#ffd166';
      badge.style.background = 'rgba(20, 16, 24, 0.85)';
      badge.style.border = '1px solid #c8a96e';
      badge.style.borderRadius = '4px';
      badge.style.padding = '2px 6px';
      badge.style.pointerEvents = 'none';
      badge.style.zIndex = '40';
      this.nodesLayer.appendChild(badge);
    }
  }

  createMultiplicityPill(x, y, rel, multKey, entityName) {
    const isEn = typeof window !== 'undefined' && window.I18N && window.I18N.getLang() === 'en';
    const val = (rel[multKey] || '').trim();
    const hasVal = val !== '' && val !== '?' && val !== '+';

    const pill = document.createElement('div');
    pill.className = hasVal ? 'mult-pill' : 'mult-pill add-pill';
    pill.textContent = hasVal ? val : '+';
    pill.style.position = 'absolute';
    pill.style.left = x + 'px';
    pill.style.top = y + 'px';
    pill.style.transform = 'translate(-50%, -50%)';
    pill.title = hasVal
      ? (isEn ? `${entityName} multiplicity (${val}). Hold 0.5s to delete, click to edit.` : `${entityName} multiplisitiyasi (${val}). O'chirish uchun 0.5 soniya bosib turing, o'zgartirish uchun bosing.`)
      : (isEn ? `Click to choose multiplicity for ${entityName} (+)` : `${entityName} tomoniga multiplicity tanlash uchun bosing (+)`);

    let holdTimer = null;
    let didHold = false;

    const startHold = (e) => {
      if (!hasVal) return;
      didHold = false;
      holdTimer = setTimeout(() => {
        didHold = true;
        rel[multKey] = '';
        this.renderLinks();
        this.triggerChange();
        const msg = isEn ? `🗑️ Multiplicity deleted from ${entityName}` : `🗑️ ${entityName} multiplicitysi o'chirildi!`;
        this.showToast(msg);
        if (window.playSfx) window.playSfx('click');
      }, 500);
    };

    const cancelHold = () => {
      if (holdTimer) {
        clearTimeout(holdTimer);
        holdTimer = null;
      }
    };

    pill.addEventListener('mousedown', startHold);
    pill.addEventListener('mouseup', cancelHold);
    pill.addEventListener('mouseleave', cancelHold);
    pill.addEventListener('touchstart', startHold, { passive: true });
    pill.addEventListener('touchend', (e) => {
      cancelHold();
      if (didHold) {
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
      }
    });
    pill.addEventListener('touchcancel', cancelHold);

    // Right-click contextmenu to delete immediately
    pill.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (hasVal) {
        rel[multKey] = '';
        this.renderLinks();
        this.triggerChange();
        const msg = isEn ? `🗑️ Multiplicity deleted from ${entityName}` : `🗑️ ${entityName} multiplicitysi o'chirildi!`;
        this.showToast(msg);
        if (window.playSfx) window.playSfx('click');
      }
    });

    pill.addEventListener('click', (e) => {
      if (didHold) {
        didHold = false;
        return;
      }
      e.stopPropagation();
      this.openMultiplicitySelector(rel, multKey, e);
    });

    this.nodesLayer.appendChild(pill);
  }

  openMultiplicitySelector(rel, multKey = 'mult1', e) {
    const isEn = typeof window !== 'undefined' && window.I18N && window.I18N.getLang() === 'en';
    let popover = document.getElementById('eerMultiplicityPopover');
    if (!popover) {
      popover = document.createElement('div');
      popover.id = 'eerMultiplicityPopover';
      popover.className = 'multiplicity-picker-popover';
      document.body.appendChild(popover);
    }

    let activeKey = multKey || 'mult1';

    const renderPopContent = () => {
      const current = rel[activeKey] || '';
      const label1 = rel.fromEntityName || rel.startSnapped?.node?.name || (isEn ? 'Side 1' : '1-Tomon');
      const label2 = rel.toEntityName || rel.endSnapped?.node?.name || (isEn ? 'Side 2' : '2-Tomon');

      popover.innerHTML = `
        <div class="mult-pop-header">
          <span class="mult-pop-title">${isEn ? "Select Multiplicity" : "Multiplicity Tanlash"}</span>
          <button class="mult-pop-close" id="btnCloseEerMultPop">✕</button>
        </div>
        <div style="display:flex; gap:6px; padding:6px 10px; background:rgba(0,0,0,0.3); border-bottom:1px solid rgba(212,175,55,0.2);">
          <button type="button" id="tabMult1" style="flex:1; padding:5px 8px; font-size:11px; font-weight:700; border-radius:4px; cursor:pointer; background:${activeKey === 'mult1' ? 'var(--accent-gold, #d4af37)' : '#221c16'}; color:${activeKey === 'mult1' ? '#14110e' : '#ffd166'}; border:1px solid #d4af37;">
            ${label1}: <strong>${rel.mult1 || (isEn ? '(None)' : '(Yo\'q)')}</strong>
          </button>
          <button type="button" id="tabMult2" style="flex:1; padding:5px 8px; font-size:11px; font-weight:700; border-radius:4px; cursor:pointer; background:${activeKey === 'mult2' ? 'var(--accent-gold, #d4af37)' : '#221c16'}; color:${activeKey === 'mult2' ? '#14110e' : '#ffd166'}; border:1px solid #d4af37;">
            ${label2}: <strong>${rel.mult2 || (isEn ? '(None)' : '(Yo\'q)')}</strong>
          </button>
        </div>
        <div class="mult-pop-body">
          <div class="mult-options-grid">
            <button class="btn-mult-opt ${current === '1..1' ? 'active' : ''}" data-val="1..1"><span>1..1</span> ${isEn ? "Exactly one" : "Majburiy bitta"}</button>
            <button class="btn-mult-opt ${current === '0..1' ? 'active' : ''}" data-val="0..1"><span>0..1</span> ${isEn ? "Zero or one" : "Ixtiyoriy bitta"}</button>
            <button class="btn-mult-opt ${current === '1..*' ? 'active' : ''}" data-val="1..*"><span>1..*</span> ${isEn ? "One or more" : "Kamida bitta"}</button>
            <button class="btn-mult-opt ${current === '0..*' ? 'active' : ''}" data-val="0..*"><span>0..*</span> ${isEn ? "Zero or more" : "Ixtiyoriy ko'p"}</button>
          </div>
          <div style="padding-top:10px; margin-top:8px; border-top:1px solid rgba(255,255,255,0.08); display:flex; justify-content:space-between; align-items:center;">
            <button type="button" id="btnDeleteActiveMult" style="background:rgba(239,68,68,0.15); border:1px solid rgba(239,68,68,0.4); color:#f87171; font-size:11px; font-weight:700; padding:5px 12px; border-radius:6px; cursor:pointer; display:flex; align-items:center; gap:4px;">
              🗑️ ${isEn ? "Remove Multiplicity" : "Multiplicityni O'chirish"}
            </button>
            <small style="color:#94a3b8; font-size:10px;">${isEn ? "Or hold pill 0.5s" : "Yoki ustiga 0.5s bosib turing"}</small>
          </div>
        </div>
      `;

      popover.querySelector('#btnCloseEerMultPop')?.addEventListener('click', () => {
        popover.style.display = 'none';
      });

      popover.querySelector('#tabMult1')?.addEventListener('click', (ev) => {
        ev.stopPropagation();
        activeKey = 'mult1';
        renderPopContent();
      });

      popover.querySelector('#tabMult2')?.addEventListener('click', (ev) => {
        ev.stopPropagation();
        activeKey = 'mult2';
        renderPopContent();
      });

      popover.querySelector('#btnDeleteActiveMult')?.addEventListener('click', (ev) => {
        ev.stopPropagation();
        rel[activeKey] = '';
        popover.style.display = 'none';
        this.renderLinks();
        this.triggerChange();
        const sideName = activeKey === 'mult1' ? label1 : label2;
        this.showToast(isEn ? `🗑️ Multiplicity removed from ${sideName}` : `🗑️ ${sideName} multiplicitysi o'chirildi!`);
        if (window.playSfx) window.playSfx('click');
      });

      popover.querySelectorAll('.btn-mult-opt').forEach(btn => {
        btn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          const val = btn.getAttribute('data-val');
          rel[activeKey] = val;
          popover.style.display = 'none';
          this.renderLinks();
          this.triggerChange();
          const sideName = activeKey === 'mult1' ? label1 : label2;
          this.showToast(isEn ? `✅ Multiplicity set: ${sideName} (${val})` : `✅ Multiplicity o'rnatildi: ${sideName} (${val})`);
          if (window.playSfx) window.playSfx('click');
        });
      });
    };

    renderPopContent();

    const target = e?.currentTarget || e?.target;
    const rect = target?.getBoundingClientRect ? target.getBoundingClientRect() : null;

    let posX = window.innerWidth / 2 - 140;
    let posY = window.innerHeight / 2 - 80;

    if (rect) {
      posX = rect.left + rect.width / 2 - 140;
      posY = rect.bottom + 8;
      if (posY + 190 > window.innerHeight) {
        posY = rect.top - 190;
      }
    } else if (e?.clientX !== undefined) {
      posX = e.clientX - 140;
      posY = e.clientY + 10;
    }

    posX = Math.max(10, Math.min(window.innerWidth - 300, posX));
    posY = Math.max(10, Math.min(window.innerHeight - 200, posY));

    popover.style.position = 'fixed';
    popover.style.left = posX + 'px';
    popover.style.top = posY + 'px';
    popover.style.zIndex = '99999';
    popover.style.display = 'flex';

    const closeOnOutside = (evt) => {
      if (!popover.contains(evt.target) && !evt.target.closest('.mult-pill') && !evt.target.closest('.line-action-toolbar')) {
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
    } else if (type === 'table-recursive' || type === 'recursive-table' || type === 'recursive-entity') {
      this.addRecursiveEntityOrLoop(centerX, centerY);
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
    this.triggerChange();
    if (window.playSfx) window.playSfx('click');
  }

  addRecursiveEntityOrLoop(cx, cy) {
    const isEn = window.I18N && window.I18N.getLang() === 'en';
    const centerX = cx !== undefined ? cx : Math.round(-this.panX / this.zoom + (this.container.offsetWidth / 2) / this.zoom - 85);
    const centerY = cy !== undefined ? cy : Math.round(-this.panY / this.zoom + (this.container.offsetHeight / 2) / this.zoom - 50);

    // If an entity is currently selected on the canvas, add a recursive self-loop directly to it!
    if (this.selectedNode && this.selectedType === 'entity') {
      const sId = this.selectedNode.id || this.selectedNode.domId;
      const existing = this.relationships.find(r => (r.fromEntityId === sId && r.toEntityId === sId) ||
        ((r.fromEntityName || '').toLowerCase() === (this.selectedNode.name || '').toLowerCase() &&
         (r.toEntityName || '').toLowerCase() === (this.selectedNode.name || '').toLowerCase()));
      if (existing) {
        this.showToast(isEn ? `'${this.selectedNode.name}' already has a recursive relationship!` : `'${this.selectedNode.name}' allaqachon rekursiv aloqaga ega!`);
        return;
      }
      this.relationships.push({
        id: 'rel_' + Math.random().toString(36).substr(2, 9),
        name: isEn ? 'Self-Ref' : 'Rekursiv',
        fromEntityId: sId,
        toEntityId: sId,
        fromEntityName: this.selectedNode.name,
        toEntityName: this.selectedNode.name,
        mult1: '',
        mult2: '',
        isDirect: true
      });
      this.renderLinks();
      this.triggerChange();
      if (window.playSfx) window.playSfx('success');
      this.showToast(isEn ? `🔄 Recursive relationship attached to '${this.selectedNode.name}'!` : `🔄 '${this.selectedNode.name}' ga rekursiv aloqa muvaffaqiyatli ulandi!`);
      return;
    }

    // Otherwise, create a new Recursive Entity with its self-loop
    const ent = this.addEntity({
      name: 'RekursivJadval',
      x: centerX,
      y: centerY,
      attributes: [
        { name: 'id', isPK: true },
        { name: 'rahbar_id', isFK: true },
        { name: 'nomi', isPK: false }
      ]
    });
    if (ent) {
      const entId = ent.id || ent.domId;
      this.relationships.push({
        id: 'rel_' + Math.random().toString(36).substr(2, 9),
        name: isEn ? 'Self-Ref' : 'Rekursiv',
        fromEntityId: entId,
        toEntityId: entId,
        fromEntityName: ent.name,
        toEntityName: ent.name,
        mult1: '',
        mult2: '',
        isDirect: true
      });
      this.renderLinks();
      this.triggerChange();
      if (window.playSfx) window.playSfx('success');
      this.showToast(isEn ? `🔄 Recursive Table and self-loop added!` : `🔄 Rekursiv Jadval va o'ziga qaytuvchi aloqa chizig'i qo'shildi!`);
    }
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
    this.isLoadingStarter = true;
    try {
      this.clearCanvas();
      if (!diagram) return;

    const w = 800;
    const h = 460;
    const entList = diagram.entities || [];
    const count = entList.length;

    entList.forEach((e, idx) => {
      let x = e.x;
      let y = e.y;
      if (x === undefined || y === undefined || isNaN(x) || isNaN(y)) {
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
          isFK: !!a.isFK,
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
      const fromEnt = this.entities.find(e => (r.fromEntityId && (e.id === r.fromEntityId || e.domId === r.fromEntityId)) || e.name.toLowerCase() === fromName.toLowerCase());
      const toEnt = this.entities.find(e => (r.toEntityId && (e.id === r.toEntityId || e.domId === r.toEntityId)) || e.name.toLowerCase() === toName.toLowerCase());

      this.relationships.push({
        id: r.id || ('rel_' + Math.random().toString(36).substr(2, 9)),
        name: r.name || 'Aloqa',
        fromEntityId: fromEnt ? (fromEnt.id || fromEnt.domId) : r.fromEntityId,
        toEntityId: toEnt ? (toEnt.id || toEnt.domId) : r.toEntityId,
        fromEntityName: fromEnt ? fromEnt.name : fromName,
        toEntityName: toEnt ? toEnt.name : toName,
        mult1: (r.mult1 !== undefined && r.mult1 !== null) ? r.mult1 : '',
        mult2: (r.mult2 !== undefined && r.mult2 !== null) ? r.mult2 : '',
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
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        this.entities.forEach(e => {
          const ex = (typeof e.x === 'number' && !isNaN(e.x)) ? e.x : 100;
          const ey = (typeof e.y === 'number' && !isNaN(e.y)) ? e.y : 100;
          minX = Math.min(minX, ex);
          minY = Math.min(minY, ey);
          maxX = Math.max(maxX, ex + (e.width || 170));
          maxY = Math.max(maxY, ey + (e.height || 100));
        });
        if (minX !== Infinity && maxX > minX) {
          const contentW = Math.max(200, maxX - minX + 80);
          const contentH = Math.max(160, maxY - minY + 80);
          const sX = containerW / contentW;
          const sY = containerH / contentH;
          this.zoom = Math.min(1.0, Math.max(0.65, Math.min(sX, sY)));
          const midWorldX = (minX + maxX) / 2;
          const midWorldY = (minY + maxY) / 2;
          this.panX = Math.round(containerW / 2 - midWorldX * this.zoom);
          this.panY = Math.round(containerH / 2 - midWorldY * this.zoom);
          this.updateViewportTransform();
        }
      }, 50);
    }
    } finally {
      this.isLoadingStarter = false;
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
    if (!this.isLoadingStarter) {
      this.triggerChange();
    }
  }

  triggerChange() {
    if (this.isLoadingStarter) return;
    if (typeof this.onChange === 'function') {
      try {
        this.onChange(this.exportCurrentDiagram());
      } catch (err) {
        console.error('EERCanvasEngine triggerChange error:', err);
      }
    }
  }

  exportCurrentDiagram() {
    const rels = [...this.relationships];
    this.standaloneLines.forEach(sl => {
      if (sl.startSnapped?.node && sl.endSnapped?.node) {
        const n1 = sl.startSnapped.node;
        const n2 = sl.endSnapped.node;
        rels.push({
          name: sl.name || 'Aloqa',
          entity1: n1.name,
          entity2: n2.name,
          fromEntityName: n1.name,
          toEntityName: n2.name,
          mult1: sl.mult1 || '1..1',
          mult2: sl.mult2 || '1..*',
          isIdentifying: !!sl.isDashed
        });
      }
    });

    return {
      entities: this.entities.map(e => ({
        name: e.name,
        pk: (e.attributes?.find(a => a.isPK) || {}).name,
        isWeak: !!e.isWeak,
        attributes: (e.attributes || []).map(a => ({
          name: a.name,
          isPK: !!a.isPK,
          isFK: !!a.isFK,
          isPPK: !!a.isPPK
        })),
        x: (typeof e.x === 'number' && !isNaN(e.x)) ? Math.round(e.x) : undefined,
        y: (typeof e.y === 'number' && !isNaN(e.y)) ? Math.round(e.y) : undefined
      })),
      relationships: rels.map(r => ({
        id: r.id,
        name: r.name,
        fromEntityId: r.fromEntityId,
        toEntityId: r.toEntityId,
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
