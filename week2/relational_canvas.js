/**
 * DATABASE SYSTEMS ACADEMY — 2-HAFTA: DRAW.IO RELATIONAL SCHEMA CANVAS ENGINE
 * draw.io uslubidagi barcha professional imkoniyatlar:
 * 1. Port strelkalari (Yuqori, O'ng, Past, Chap) & Strelkani sudrab ikkinchi jadvalga ulash (Drag-to-Connect)
 * 2. Chiziq ustiga bosilganda Multiplicity variantlarini tanlash (1..1, 0..1, 1..*, 0..*, solid/dashed)
 * 3. Atribut nomini bosganda yoki ✎ tugmasi orqali to'g'ridan-to'g'ri o'zgartirish
 * 4. Magnit (Magnetic Snap): chiziq yaqiniga jadval kelganda yoki chiziq uchi jadvalga yaqinlashganda avtomatik ushlab olish
 * 5. Draw.io Shakllar Palitrasi (Chap panel, yig'ib qo'yiladigan, barcha 17 ta ER va relyatsion shakllar)
 * 6. Sichqoncha g'ildiragi bilan masshtablash (Zoom) & Polotnoni surish (Pan)
 * 7. draw.io XML va Relyatsion modelga to'g'ridan-to'g'ri eksport
 */

class RelationalCanvasEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.tables = [];
    this.references = [];

    // Zoom & Pan
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;
    this.isPanning = false;
    this.startPanX = 0;
    this.startPanY = 0;

    // Selection & Dragging
    this.selectedTable = null;
    this.isDraggingNode = false;
    this.draggedTable = null;
    this.dragOffsetX = 0;
    this.dragOffsetY = 0;

    // Port Connection Drag
    this.isConnecting = false;
    this.connectSource = null; // { table, port: 'top'|'right'|'bottom'|'left' }
    this.connectCurrentX = 0;
    this.connectCurrentY = 0;
    this.connectMovedDist = 0;

    // Free-standing connection lines & Resizing
    this.freeLines = [];
    this.standaloneLines = [];
    this.draggingHandle = null; // { line, handle: 'start'|'end' }

    this.isResizing = false;
    this.resizingNode = null;
    this.resizeStartX = 0;
    this.resizeStartY = 0;
    this.resizeStartWidth = 0;
    this.resizeStartHeight = 0;

    // Magnetic snap target candidate
    this.snapCandidate = null;

    this.initDOM();
    this.attachEvents();
    this.initSidebar();
  }

  initDOM() {
    this.container.innerHTML = `
      <div class="canvas-viewport" id="canvasViewport">
        <svg id="relCanvasSvg"></svg>
        <div class="rel-nodes-layer" id="relNodesLayer"></div>
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
    this.svg = document.getElementById('relCanvasSvg');
    this.nodesLayer = document.getElementById('relNodesLayer');
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
      // If user clicked on a table, port, button, handle, or line, NEVER pan!
      if (e.target.closest && (
        e.target.closest('.rel-table-box') || 
        e.target.closest('circle') || 
        e.target.closest('.magnetic-handle-group') || 
        e.target.closest('.conn-port-handle-group') || 
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
        this.draggingHandle = null;
        this.draggingFreeLine = null;
        this.isPanning = true;
        this.startPanX = e.clientX - this.panX;
        this.startPanY = e.clientY - this.panY;
        this.container.style.cursor = 'grabbing';
      }
    });

    // 3. Pointer move for dragging table, panning, or connection line
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
          // 1 barmoq bilan diagramma surilmaydi - faqat 2 barmoq bilan!
          this.isPanning = false;
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
    // 0. Dragging Whole Standalone Line Body (Line moves across canvas without dragging tables)
    if (this.draggingWholeLine) {
      this.isPanning = false;
      this.isDraggingNode = false;
      this.draggedTable = null;
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

      this.renderCrowFootLinks();
      return;
    }

    // 1. Dragging Table Node - MUST BE FIRST! Moves ONLY this single table & attached lines!
    if (this.isDraggingNode && this.draggedTable) {
      this.isPanning = false;
      const world = this.screenToWorld(e.clientX, e.clientY);
      const newX = Math.round(world.x - this.dragOffsetX);
      const newY = Math.round(world.y - this.dragOffsetY);
      const dx = newX - this.draggedTable.x;
      const dy = newY - this.draggedTable.y;
      this.draggedTable.x = newX;
      this.draggedTable.y = newY;
      this.updateTableDOMPosition(this.draggedTable);

      // Smoothly travel attached free-hanging lines WITH the table
      for (const fl of this.freeLines) {
        if (fl.table && fl.table.domId === this.draggedTable.domId) {
          fl.endX += dx;
          fl.endY += dy;
        }
      }

      // Smoothly travel attached standalone lines WITH the table
      for (const sl of this.standaloneLines) {
        if (sl.startSnapped?.table?.domId === this.draggedTable.domId && !sl.endSnapped) {
          sl.endX += dx;
          sl.endY += dy;
        } else if (sl.endSnapped?.table?.domId === this.draggedTable.domId && !sl.startSnapped) {
          sl.startX += dx;
          sl.startY += dy;
        }
      }

      // Check Magnetic Snap with free-standing lines
      this.snapCandidate = null;
      for (const fl of this.freeLines) {
        if (fl.table.domId === this.draggedTable.domId) continue;
        const tblCenterX = this.draggedTable.x + (this.draggedTable.width || 200) / 2;
        const tblCenterY = this.draggedTable.y + (this.draggedTable.height || 120) / 2;
        const dist = Math.hypot(fl.endX - tblCenterX, fl.endY - tblCenterY);
        if (dist < 140) {
          this.snapCandidate = { freeLine: fl, table: this.draggedTable };
          break;
        }
      }

      this.renderCrowFootLinks();
      return;
    }

    // 2. Dragging Free-Standing Line End Handle (draw.io hanging line drag)
    if (this.draggingFreeLine) {
      this.isPanning = false;
      const world = this.screenToWorld(e.clientX, e.clientY);
      this.draggingFreeLine.endX = Math.round(world.x);
      this.draggingFreeLine.endY = Math.round(world.y);

      // Check magnetic snap with any other table
      this.snapCandidate = null;
      for (const tbl of this.tables) {
        if (tbl.domId === this.draggingFreeLine.table.domId) continue;
        const cx = tbl.x + (tbl.width || 200) / 2;
        const cy = tbl.y + (tbl.height || 120) / 2;
        if (Math.hypot(world.x - cx, world.y - cy) < 130) {
          this.snapCandidate = { freeLine: this.draggingFreeLine, table: tbl };
          break;
        }
      }

      this.renderCrowFootLinks();
      return;
    }

    // 3. Standalone Connector Line Handles
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
      for (const tbl of this.tables) {
        const cx = tbl.x + (tbl.width || 200) / 2;
        const cy = tbl.y + (tbl.height || 120) / 2;
        const dist = Math.hypot(world.x - cx, world.y - cy);
        if (dist < 110) {
          this.snapCandidate = { target: tbl, handle: this.draggingHandle.handle, line };
          break;
        }
      }

      this.renderCrowFootLinks();
      return;
    }

    // 4. Dragging Connection Line from a port
    if (this.isConnecting && this.connectSource) {
      this.isPanning = false;
      const world = this.screenToWorld(e.clientX, e.clientY);
      this.connectCurrentX = world.x;
      this.connectCurrentY = world.y;
      this.connectMovedDist += 5;
      this.renderTemporaryConnectingLine();
      return;
    }

    // 5. Resizing Table (draw.io corner drag)
    if (this.isResizing && this.resizingNode) {
      this.isPanning = false;
      const dx = (e.clientX - this.resizeStartX) / this.zoom;
      const dy = (e.clientY - this.resizeStartY) / this.zoom;
      this.resizingNode.width = Math.max(160, Math.round(this.resizeStartWidth + dx));
      this.resizingNode.height = Math.max(90, Math.round(this.resizeStartHeight + dy));
      const el = document.getElementById(this.resizingNode.domId);
      if (el) {
        el.style.width = this.resizingNode.width + 'px';
        el.style.minHeight = this.resizingNode.height + 'px';
      }
      this.renderCrowFootLinks();
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
          this.renderCrowFootLinks();
          this.showToast("🗑️ Magnit chiziq o'chirildi!");
          if (window.playSfx) window.playSfx('click');
        });
      }
      this.draggingWholeLine = null;
      return;
    }

    // Free-line end dragging release
    if (this.draggingFreeLine) {
      if (this.snapCandidate && this.snapCandidate.table) {
        const targetTable = this.snapCandidate.table;
        this.completeTableConnection(this.draggingFreeLine.table, targetTable);
        this.freeLines = this.freeLines.filter(item => item !== this.draggingFreeLine);
        this.showToast(`🧲 Magnit: ${this.draggingFreeLine.table.name} va ${targetTable.name} muvaffaqiyatli bog'landi!`);
      } else {
        this.showToast("📍 Chiziq uchi joylashtirildi. Uni istalgan paytda boshqa jadvalga ulab olishingiz mumkin.");
      }
      this.draggingFreeLine = null;
      this.snapCandidate = null;
      this.renderCrowFootLinks();
      return;
    }

    if (this.draggingHandle) {
      const line = this.draggingHandle.line;
      const handleName = this.draggingHandle.handle;
      if (this.snapCandidate && this.snapCandidate.line === line && this.snapCandidate.handle === handleName) {
        const tbl = this.snapCandidate.target;
        if (handleName === 'start') {
          line.startSnapped = { table: tbl };
          const border = this.getTableBorderPoint(tbl, line.endX, line.endY);
          line.startX = Math.round(border.x);
          line.startY = Math.round(border.y);
        } else {
          line.endSnapped = { table: tbl };
          const border = this.getTableBorderPoint(tbl, line.startX, line.startY);
          line.endX = Math.round(border.x);
          line.endY = Math.round(border.y);
        }

        if (line.startSnapped && line.endSnapped) {
          const t1 = line.startSnapped.table;
          const t2 = line.endSnapped.table;
          if (t1.domId !== t2.domId) {
            this.completeTableConnection(t1, t2);
            this.showToast(`🧲 Ikkala uchi ulandi: ${t1.name} va ${t2.name} to'liq bog'landi!`);
            this.standaloneLines = this.standaloneLines.filter(l => l.id !== line.id);
          }
        } else {
          this.showToast(`🧲 Bitta uchi '${tbl.name}' ga ulandi! Ikkinchi uchini boshqa jadvalga ulang.`);
        }
        this.snapCandidate = null;
      }
      this.draggingHandle = null;
      this.renderCrowFootLinks();
      return;
    }

    // Magnetic snap when table is dropped near a free-line end
    if (this.isDraggingNode && this.draggedTable && this.snapCandidate && this.snapCandidate.freeLine) {
      const fl = this.snapCandidate.freeLine;
      const tbl = this.snapCandidate.table;
      this.completeTableConnection(fl.table, tbl);
      this.freeLines = this.freeLines.filter(item => item !== fl);
      this.showToast(`🧲 Magnit: ${fl.table.name} va ${tbl.name} muvaffaqiyatli bog'landi!`);
      this.snapCandidate = null;
      this.renderCrowFootLinks();
    }

    if (this.isDraggingNode) {
      this.isDraggingNode = false;
      this.draggedTable = null;
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
  // CONNECTION PORTS & DRAW.IO CROW'S FOOT DRAG-TO-CONNECT
  // ==========================================================================
  startPortConnection(table, port) {
    this.isConnecting = true;
    this.connectSource = { table, port };

    const portPos = this.getPortCoords(table, port);
    this.connectCurrentX = portPos.x;
    this.connectCurrentY = portPos.y;
    this.connectMovedDist = 0;

    this.deselectAll();
    const el = document.getElementById(table.domId);
    if (el) el.classList.add('connecting-source');

    if (window.playSfx) window.playSfx('click');
  }

  cancelConnecting() {
    this.isConnecting = false;
    this.connectSource = null;
    const tempLine = document.getElementById('relTempDragLine');
    if (tempLine) tempLine.remove();
    document.querySelectorAll('.rel-table-box').forEach(el => el.classList.remove('connecting-source'));
  }

  getPortCoords(table, port) {
    const w = table.width || 200;
    const h = table.height || 120;
    if (port === 'top') return { x: table.x + w / 2, y: table.y };
    if (port === 'right') return { x: table.x + w, y: table.y + h / 2 };
    if (port === 'bottom') return { x: table.x + w / 2, y: table.y + h };
    if (port === 'left') return { x: table.x, y: table.y + h / 2 };
    return { x: table.x + w / 2, y: table.y + h / 2 };
  }

  renderTemporaryConnectingLine() {
    let tempLine = document.getElementById('relTempDragLine');
    if (!tempLine) {
      tempLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      tempLine.id = 'relTempDragLine';
      tempLine.setAttribute('stroke', '#dfc288');
      tempLine.setAttribute('stroke-width', '2.5');
      tempLine.setAttribute('stroke-dasharray', '5,5');
      tempLine.setAttribute('stroke-linecap', 'round');
      tempLine.setAttribute('pointer-events', 'none');
      tempLine.style.pointerEvents = 'none';
      this.svg.appendChild(tempLine);
    }

    const start = this.getPortCoords(this.connectSource.table, this.connectSource.port);
    tempLine.setAttribute('x1', start.x);
    tempLine.setAttribute('y1', start.y);
    tempLine.setAttribute('x2', this.connectCurrentX);
    tempLine.setAttribute('y2', this.connectCurrentY);
  }

  completeTableConnection(childTable, targetTable, fromMult = '0..*', toMult = '1..1') {
    const alreadyExists = this.references.some(r => 
      (r.fromTable === childTable.name && r.toTable === targetTable.name) ||
      (r.fromTable === targetTable.name && r.toTable === childTable.name)
    );
    if (!alreadyExists) {
      this.references.push({
        fromTable: childTable.name,
        toTable: targetTable.name,
        fromMult: fromMult,
        toMult: toMult,
        isDashed: false
      });
      if (window.playSfx) window.playSfx('success');
    }
    this.renderCrowFootLinks();
  }

  finishConnection(e) {
    const tempLine = document.getElementById('relTempDragLine');
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
      const targetBox = targetEl ? targetEl.closest('.rel-table-box') : null;
      let targetTable = null;
      if (targetBox && targetBox.id !== this.connectSource.table.domId) {
        targetTable = this.tables.find(t => t.domId === targetBox.id);
      } else {
        const world = this.screenToWorld(clientX, clientY);
        for (const tbl of this.tables) {
          if (tbl.domId === this.connectSource.table.domId) continue;
          const cx = tbl.x + (tbl.width || 200) / 2;
          const cy = tbl.y + (tbl.height || 120) / 2;
          if (Math.hypot(world.x - cx, world.y - cy) < 140) {
            targetTable = tbl;
            break;
          }
        }
      }

      if (targetTable) {
        this.completeTableConnection(this.connectSource.table, targetTable);
        this.showToast(`🧲 Magnit: ${this.connectSource.table.name} va ${targetTable.name} bog'landi!`);
        this.cancelConnecting();
        return;
      }

      // If user dragged to empty space (free-standing line)
      if (this.connectMovedDist > 20) {
        const world = this.screenToWorld(clientX, clientY);
        this.freeLines.push({
          id: 'free_' + Math.random().toString(36).substr(2, 9),
          table: this.connectSource.table,
          port: this.connectSource.port,
          mult: '1..1',
          endX: Math.round(world.x),
          endY: Math.round(world.y)
        });
        if (window.playSfx) window.playSfx('click');
        this.cancelConnecting();
        this.renderCrowFootLinks();
        return;
      }
    }

    this.cancelConnecting();
  }

  // ==========================================================================
  // TABLE SELECTION & DRAGGING
  // ==========================================================================
  onTablePointerDown(point, table) {
    this.isPanning = false;
    this.draggingFreeLine = null;
    this.draggingHandle = null;

    if (this.isConnecting && this.connectSource) {
      if (this.connectSource.table.domId !== table.domId) {
        this.completeTableConnection(this.connectSource.table, table);
      }
      this.cancelConnecting();
      return;
    }

    this.selectTable(table);
    this.isDraggingNode = true;
    this.draggedTable = table;

    const clientX = point.clientX !== undefined ? point.clientX : 0;
    const clientY = point.clientY !== undefined ? point.clientY : 0;

    const world = this.screenToWorld(clientX, clientY);
    this.dragOffsetX = world.x - table.x;
    this.dragOffsetY = world.y - table.y;
  }

  selectTable(table) {
    this.deselectAll();
    this.selectedTable = table;
    const el = document.getElementById(table.domId);
    if (el) el.classList.add('selected');
  }

  deselectAll() {
    this.selectedTable = null;
    document.querySelectorAll('.rel-table-box').forEach(el => el.classList.remove('selected'));
  }

  updateTableDOMPosition(table) {
    const el = document.getElementById(table.domId);
    if (el) {
      el.style.left = table.x + 'px';
      el.style.top = table.y + 'px';
    }
  }

  // ==========================================================================
  // TABLE CRUD & COLUMNS MANAGEMENT
  // ==========================================================================
  addTable(data = {}) {
    const id = 'tbl_' + Math.random().toString(36).substr(2, 9);
    const table = {
      id: id,
      domId: id,
      name: data.tableName || data.name || 'YangiJadval',
      columns: data.columns ? JSON.parse(JSON.stringify(data.columns)) : [
        { name: 'id', isPK: true },
        { name: 'nomi', isPK: false }
      ],
      x: data.x !== undefined ? data.x : 100,
      y: data.y !== undefined ? data.y : 100,
      width: 200,
      height: 120
    };

    this.tables.push(table);
    this.createTableDOM(table);
    this.renderCrowFootLinks();
    return table;
  }

  createTableDOM(table) {
    const el = document.createElement('div');
    el.id = table.domId;
    el.className = 'rel-table-box';
    el.style.left = table.x + 'px';
    el.style.top = table.y + 'px';

    const portsHtml = `
      <div class="port-arrow top" data-port="top" title="Yuqoridan ulash">▲</div>
      <div class="port-arrow right" data-port="right" title="O'ngdan ulash">▶</div>
      <div class="port-arrow bottom" data-port="bottom" title="Pastdan ulash">▼</div>
      <div class="port-arrow left" data-port="left" title="Chapdan ulash">◀</div>
    `;

    el.innerHTML = `
      ${portsHtml}
      <div class="rel-table-header">
        <span class="table-title-text" title="Tahrirlash uchun bosing">${table.name}</span>
        <div class="entity-actions">
          <button class="btn-node-act" data-action="add-col" title="Ustun qo'shish">+</button>
          <button class="btn-node-act" data-action="edit-name" title="Nomini o'zgartirish">✎</button>
          <button class="btn-node-act del" data-action="del-table" title="Jadvalni o'chirish">✕</button>
        </div>
      </div>
      <div class="rel-table-body" id="${table.domId}_body"></div>
      <div class="node-resize-handle" title="O'lchamni o'zgartirish"></div>
    `;

    this.renderTableColumns(table, el.querySelector('.rel-table-body'));

    // Drag events (Mouse + Touch)
    const onTableStart = (e) => {
      if (e.target.closest('.port-arrow') || e.target.closest('button') || e.target.closest('.btn-attr-badge') || e.target.closest('.rel-key-cell') || e.target.closest('.node-resize-handle') || e.target.closest('.pk-badge') || e.target.closest('.fk-badge') || e.target.closest('.type-badge') || e.target.closest('.btn-row-del') || e.target.closest('.btn-attr-edit') || e.target.closest('[contenteditable="true"]')) return;
      if (e.touches && e.touches.length > 1) return;
      e.stopPropagation();
      if (e.cancelable && e.type === 'touchstart') e.preventDefault();
      const point = e.touches ? e.touches[0] : e;
      this.onTablePointerDown(point, table);
    };
    el.addEventListener('mousedown', onTableStart);
    el.addEventListener('touchstart', onTableStart, { passive: false });

    // Resize Handle (draw.io corner drag)
    const resizeHandle = el.querySelector('.node-resize-handle');
    if (resizeHandle) {
      const onResizeStart = (e) => {
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        const pt = e.touches ? e.touches[0] : e;
        this.isResizing = true;
        this.resizingNode = table;
        this.resizeStartX = pt.clientX;
        this.resizeStartY = pt.clientY;
        this.resizeStartWidth = table.width || el.offsetWidth || 200;
        this.resizeStartHeight = table.height || el.offsetHeight || 120;
      };
      resizeHandle.addEventListener('mousedown', onResizeStart);
      resizeHandle.addEventListener('touchstart', onResizeStart, { passive: false });
    }

    // Connection port events (Mouse + Touch)
    el.querySelectorAll('.port-arrow').forEach(p => {
      const onPortStart = (e) => {
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        const portName = p.getAttribute('data-port');
        this.startPortConnection(table, portName);
      };
      p.addEventListener('mousedown', onPortStart);
      p.addEventListener('touchstart', onPortStart, { passive: false });
    });

    el.querySelector('[data-action="add-col"]')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const colName = prompt("Yangi ustun nomini kiriting:", "yangi_ustun");
      if (colName) {
        table.columns.push({ name: colName.trim(), isPK: false });
        this.renderTableColumns(table, el.querySelector('.rel-table-body'));
        this.renderCrowFootLinks();
      }
    });

    el.querySelector('[data-action="edit-name"]')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const newName = prompt("Jadval nomini o'zgartiring:", table.name);
      if (newName) {
        const oldName = table.name;
        table.name = newName.trim();
        el.querySelector('.table-title-text').textContent = table.name;
        this.references.forEach(r => {
          if (r.fromTable === oldName) r.fromTable = table.name;
          if (r.toTable === oldName) r.toTable = table.name;
        });
        this.renderCrowFootLinks();
      }
    });

    el.querySelector('[data-action="del-table"]')?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm(`'${table.name}' jadvalini o'chirishni xohlaysizmi?`)) {
        this.deleteTable(table);
      }
    });

    this.nodesLayer.appendChild(el);

    setTimeout(() => {
      table.height = el.offsetHeight || 120;
      table.width = el.offsetWidth || 200;
    }, 10);
  }

  renderTableColumns(table, containerEl) {
    if (!containerEl) return;
    containerEl.innerHTML = '';

    table.columns.forEach((col, idx) => {
      const row = document.createElement('div');
      row.className = 'rel-row';

      let keyClass = '';
      let keyLabel = 'Oddiy';

      if (col.isPK && col.isFK) {
        keyClass = 'pkfk';
        keyLabel = 'PK,FK1';
      } else if (col.isPK) {
        keyClass = 'pk';
        keyLabel = 'PK';
      } else if (col.isFK) {
        keyClass = 'fk';
        keyLabel = col.fkTag || 'FK1';
      }

      let tagsHtml = '';
      if (col.isUnique) tagsHtml += '<span class="rel-tag-pill">{U}</span>';
      if (col.isNullable) tagsHtml += '<span class="rel-tag-pill">{null}</span>';

      row.innerHTML = `
        <div class="rel-key-cell ${keyClass} btn-attr-badge" title="Kalit turini o'zgartirish (PK / FK1 / PK,FK1 / Oddiy)">${keyLabel}</div>
        <div class="rel-name-cell">
          <span class="attr-name" contenteditable="true" spellcheck="false" title="Nomini o'zgartirish">${col.name}</span>
          <div style="display:flex; align-items:center; gap:3px;">
            <span>${tagsHtml}</span>
            <button class="btn-attr-edit" title="Nomini o'zgartirish">✎</button>
            <button class="btn-attr-del" title="Ustunni o'chirish">✕</button>
          </div>
        </div>
      `;

      const nameEl = row.querySelector('.attr-name');
      const editBtn = row.querySelector('.btn-attr-edit');

      const triggerRename = (e) => {
        e?.stopPropagation();
        const newName = prompt("Atribut / Ustun nomini kiriting:", col.name);
        if (newName && newName.trim()) {
          col.name = newName.trim();
          nameEl.textContent = col.name;
          this.renderCrowFootLinks();
        }
      };

      editBtn?.addEventListener('click', triggerRename);
      nameEl.addEventListener('click', triggerRename);
      nameEl.addEventListener('dblclick', triggerRename);

      nameEl.addEventListener('blur', () => {
        col.name = nameEl.textContent.trim() || col.name;
      });
      nameEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          nameEl.blur();
        }
      });

      // Cycle key badge: PK -> FK1 -> PK,FK1 -> None (Works on touch and click)
      const badgeBtn = row.querySelector('.btn-attr-badge');
      let lastToggleTime = 0;
      const toggleKey = (e) => {
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        const now = Date.now();
        if (now - lastToggleTime < 300) return; // Prevent double trigger
        lastToggleTime = now;

        if (col.isPK && !col.isFK) {
          col.isPK = false;
          col.isFK = true;
          col.fkTag = 'FK1';
        } else if (!col.isPK && col.isFK) {
          col.isPK = true;
          col.isFK = true;
          col.fkTag = 'FK1';
        } else if (col.isPK && col.isFK) {
          col.isPK = false;
          col.isFK = false;
        } else {
          col.isPK = true;
          col.isFK = false;
        }
        this.renderTableColumns(table, containerEl);
        this.renderCrowFootLinks();
        if (window.playSfx) window.playSfx('click');
      };
      badgeBtn?.addEventListener('click', toggleKey);
      badgeBtn?.addEventListener('touchend', toggleKey);

      row.querySelector('.btn-attr-del')?.addEventListener('click', (e) => {
        e.stopPropagation();
        table.columns.splice(idx, 1);
        this.renderTableColumns(table, containerEl);
        this.renderCrowFootLinks();
      });

      containerEl.appendChild(row);
    });

    const boxEl = document.getElementById(table.domId);
    if (boxEl) {
      setTimeout(() => {
        table.height = boxEl.offsetHeight || 120;
      }, 10);
    }
  }

  deleteTable(table) {
    this.tables = this.tables.filter(t => t.id !== table.id);
    document.getElementById(table.domId)?.remove();

    this.references = this.references.filter(r => r.fromTable !== table.name && r.toTable !== table.name);
    this.renderCrowFootLinks();
  }

  // ==========================================================================
  // RENDERING CROW'S FOOT CONNECTOR LINES & MULTIPLICITY CONTROLS
  // ==========================================================================
  getTableBorderPoint(tbl, targetX, targetY) {
    if (!tbl) return { x: targetX, y: targetY, dirX: 1, dirY: 0 };
    const el = document.getElementById(tbl.domId);
    const w = (el && el.offsetWidth > 40) ? el.offsetWidth : (tbl.width || 200);
    const h = (el && el.offsetHeight > 30) ? el.offsetHeight : (tbl.height || 120);
    tbl.width = w;
    tbl.height = h;

    const cx = tbl.x + w / 2;
    const cy = tbl.y + h / 2;
    const dx = targetX - cx;
    const dy = targetY - cy;
    const dist = Math.hypot(dx, dy) || 1;
    const ux = dx / dist;
    const uy = dy / dist;

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

  renderCrowFootLinks() {
    this.svg.innerHTML = '';

    this.references.forEach(ref => {
      const t1 = this.tables.find(t => t.name.toLowerCase() === ref.fromTable.toLowerCase());
      const t2 = this.tables.find(t => t.name.toLowerCase() === ref.toTable.toLowerCase());
      if (t1 && t2) {
        this.drawTableConnection(ref, t1, t2);
      }
    });

    // Render Standalone 2-ended Magnetic Lines
    this.standaloneLines.forEach(line => {
      if (line.startSnapped && line.startSnapped.table) {
        const tbl = line.startSnapped.table;
        const border = this.getTableBorderPoint(tbl, line.endX, line.endY);
        line.startX = Math.round(border.x);
        line.startY = Math.round(border.y);
      }
      if (line.endSnapped && line.endSnapped.table) {
        const tbl = line.endSnapped.table;
        const border = this.getTableBorderPoint(tbl, line.startX, line.startY);
        line.endX = Math.round(border.x);
        line.endY = Math.round(border.y);
      }

      const onLineDblClick = (e) => {
        e?.stopPropagation();
        this.standaloneLines = this.standaloneLines.filter(l => l.id !== line.id);
        this.renderCrowFootLinks();
        this.showToast("🗑️ Magnit chiziq o'chirildi!");
        if (window.playSfx) window.playSfx('click');
      };

      const midX = (line.startX + line.endX) / 2;
      const midY = (line.startY + line.endY) / 2;
      const pathD = `M ${line.startX} ${line.startY} C ${midX} ${line.startY}, ${midX} ${line.endY}, ${line.endX} ${line.endY}`;

      const onStartWholeLineDrag = (e) => {
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        this.isPanning = false;
        this.isDraggingNode = false;
        this.draggedTable = null;
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

      const showDeleteBtn = (e) => {
        e.stopPropagation();
        this.showLineDeleteButton(midX, midY, onLineDblClick);
      };

      const hitbox = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      hitbox.setAttribute('d', pathD);
      hitbox.setAttribute('stroke', 'transparent');
      hitbox.setAttribute('stroke-width', '24');
      hitbox.setAttribute('fill', 'none');
      hitbox.style.cursor = 'grab';
      hitbox.style.pointerEvents = 'stroke';
      hitbox.addEventListener('mousedown', onStartWholeLineDrag);
      hitbox.addEventListener('touchstart', onStartWholeLineDrag, { passive: false });
      hitbox.addEventListener('click', showDeleteBtn);
      hitbox.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        this.removeLineDeleteButton();
        onLineDblClick(e);
      });
      let lastTap = 0;
      hitbox.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTap < 350 && now - lastTap > 0) {
          e.stopPropagation();
          if (e.cancelable) e.preventDefault();
          this.removeLineDeleteButton();
          onLineDblClick(e);
        } else {
          this.showLineDeleteButton(midX, midY, onLineDblClick);
        }
        lastTap = now;
      }, { passive: false });
      this.svg.appendChild(hitbox);

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pathD);
      path.setAttribute('stroke', '#d19a52');
      path.setAttribute('stroke-width', '2.5');
      path.setAttribute('fill', 'none');
      if (line.isDashed) path.setAttribute('stroke-dasharray', '6,4');
      path.style.cursor = 'grab';
      path.style.pointerEvents = 'stroke';
      path.addEventListener('mousedown', onStartWholeLineDrag);
      path.addEventListener('touchstart', onStartWholeLineDrag, { passive: false });
      path.addEventListener('click', showDeleteBtn);
      path.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        this.removeLineDeleteButton();
        onLineDblClick(e);
      });
      this.svg.appendChild(path);

      // Magnetic Handles at both ends cleanly without middle badge
      this.renderMagneticHandle(line, 'start', line.startX, line.startY, onLineDblClick);
      this.renderMagneticHandle(line, 'end', line.endX, line.endY, onLineDblClick);
    });

    // Render Free-Standing Connection Lines
    this.freeLines = this.freeLines.filter(fl => {
      return this.tables.some(t => t.domId === fl.table.domId);
    });

    this.freeLines.forEach((fl, idx) => {
      const start = this.getPortCoords(fl.table, fl.port);
      const onFreeDblClick = (e) => {
        e?.stopPropagation();
        this.freeLines.splice(idx, 1);
        this.renderCrowFootLinks();
        this.showToast("🗑️ Erkin chiziq o'chirildi!");
        if (window.playSfx) window.playSfx('click');
      };

      const onStartFreeLineDrag = (e) => {
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        this.isPanning = false;
        this.isDraggingNode = false;
        this.draggedTable = null;
        this.draggingHandle = null;
        this.draggingFreeLine = fl;
      };

      const midFreeX = (start.x + fl.endX) / 2;
      const midFreeY = (start.y + fl.endY) / 2;

      // Invisible thick hitbox for touch & click
      const freeHitbox = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      freeHitbox.setAttribute('x1', start.x);
      freeHitbox.setAttribute('y1', start.y);
      freeHitbox.setAttribute('x2', fl.endX);
      freeHitbox.setAttribute('y2', fl.endY);
      freeHitbox.setAttribute('stroke', 'transparent');
      freeHitbox.setAttribute('stroke-width', '24');
      freeHitbox.style.cursor = 'grab';
      freeHitbox.style.pointerEvents = 'stroke';
      freeHitbox.addEventListener('mousedown', onStartFreeLineDrag);
      freeHitbox.addEventListener('touchstart', onStartFreeLineDrag, { passive: false });
      freeHitbox.addEventListener('click', (e) => {
        e.stopPropagation();
        this.showLineDeleteButton(midFreeX, midFreeY, onFreeDblClick);
      });
      freeHitbox.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        this.removeLineDeleteButton();
        onFreeDblClick(e);
      });
      let lastFreeTap = 0;
      freeHitbox.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastFreeTap < 350 && now - lastFreeTap > 0) {
          e.stopPropagation();
          if (e.cancelable) e.preventDefault();
          this.removeLineDeleteButton();
          onFreeDblClick(e);
        } else {
          this.showLineDeleteButton(midFreeX, midFreeY, onFreeDblClick);
        }
        lastFreeTap = now;
      }, { passive: false });
      this.svg.appendChild(freeHitbox);

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', start.x);
      line.setAttribute('y1', start.y);
      line.setAttribute('x2', fl.endX);
      line.setAttribute('y2', fl.endY);
      line.setAttribute('stroke', '#dfc288');
      line.setAttribute('stroke-width', '2.5');
      line.setAttribute('stroke-linecap', 'round');
      line.style.cursor = 'grab';
      line.style.pointerEvents = 'stroke';
      line.addEventListener('mousedown', onStartFreeLineDrag);
      line.addEventListener('touchstart', onStartFreeLineDrag, { passive: false });
      line.addEventListener('click', (e) => {
        e.stopPropagation();
        this.showLineDeleteButton(midFreeX, midFreeY, onFreeDblClick);
      });
      line.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        this.removeLineDeleteButton();
        onFreeDblClick(e);
      });
      this.svg.appendChild(line);

      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

      // Invisible large hitbox for touch
      const hitbox = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      hitbox.setAttribute('cx', fl.endX);
      hitbox.setAttribute('cy', fl.endY);
      hitbox.setAttribute('r', '24');
      hitbox.setAttribute('fill', 'transparent');
      hitbox.setAttribute('stroke', 'transparent');
      hitbox.style.cursor = 'grab';
      hitbox.style.pointerEvents = 'all';

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', fl.endX);
      circle.setAttribute('cy', fl.endY);
      circle.setAttribute('r', '8.5');
      circle.setAttribute('fill', '#ffd166');
      circle.setAttribute('stroke', '#1e1916');
      circle.setAttribute('stroke-width', '2');
      circle.style.cursor = 'grab';
      circle.style.pointerEvents = 'none';

      if (this.snapCandidate && this.snapCandidate.freeLine === fl) {
        circle.classList.add('snap-highlight');
      }

      const startDragHandle = (e) => {
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        this.isPanning = false;
        this.isDraggingNode = false;
        this.draggingHandle = null;
        this.draggingFreeLine = fl;
      };
      hitbox.addEventListener('mousedown', startDragHandle);
      hitbox.addEventListener('touchstart', startDragHandle, { passive: false });

      hitbox.addEventListener('dblclick', onFreeDblClick);
      let lastTap = 0;
      hitbox.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTap < 350 && now - lastTap > 0) {
          e.stopPropagation();
          if (e.cancelable) e.preventDefault();
          onFreeDblClick(e);
        }
        lastTap = now;
      }, { passive: false });

      group.appendChild(hitbox);
      group.appendChild(circle);
      this.svg.appendChild(group);
    });
  }

  renderMagneticHandle(line, handleName, x, y, onDblClick) {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    // Invisible large touch hitbox (48px diameter)
    const hitbox = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    hitbox.setAttribute('cx', x);
    hitbox.setAttribute('cy', y);
    hitbox.setAttribute('r', '24');
    hitbox.setAttribute('fill', 'transparent');
    hitbox.setAttribute('stroke', 'transparent');
    hitbox.style.cursor = 'grab';
    hitbox.style.pointerEvents = 'all';

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', '9');
    circle.setAttribute('fill', '#ffd166');
    circle.setAttribute('stroke', '#1e1916');
    circle.setAttribute('stroke-width', '2');
    circle.style.cursor = 'grab';
    circle.style.pointerEvents = 'none';

    if (this.snapCandidate && this.snapCandidate.line === line && this.snapCandidate.handle === handleName) {
      circle.setAttribute('stroke', '#06d6a0');
      circle.setAttribute('stroke-width', '3.5');
      circle.setAttribute('r', '12');
      circle.setAttribute('fill', '#06d6a0');
    }

    const startDragHandle = (e) => {
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      this.draggingHandle = { line, handle: handleName };
    };

    hitbox.addEventListener('mousedown', startDragHandle);
    hitbox.addEventListener('touchstart', startDragHandle, { passive: false });

    if (onDblClick) {
      hitbox.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        onDblClick(e);
      });
      let lastTap = 0;
      hitbox.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTap < 350 && now - lastTap > 0) {
          e.stopPropagation();
          if (e.cancelable) e.preventDefault();
          onDblClick(e);
        }
        lastTap = now;
      }, { passive: false });
    }

    group.appendChild(hitbox);
    group.appendChild(circle);
    this.svg.appendChild(group);
  }

  renderConnectionPortHandle(x, y, onDragStart, onDblClick) {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    const hitbox = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    hitbox.setAttribute('cx', x);
    hitbox.setAttribute('cy', y);
    hitbox.setAttribute('r', '24');
    hitbox.setAttribute('fill', 'transparent');
    hitbox.setAttribute('stroke', 'transparent');
    hitbox.style.cursor = 'grab';
    hitbox.style.pointerEvents = 'all';

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', '8.5');
    circle.setAttribute('fill', '#ffd166');
    circle.setAttribute('stroke', '#1e1916');
    circle.setAttribute('stroke-width', '2');
    circle.style.cursor = 'grab';
    circle.style.pointerEvents = 'none';

    hitbox.addEventListener('mousedown', onDragStart);
    hitbox.addEventListener('touchstart', onDragStart, { passive: false });

    if (onDblClick) {
      hitbox.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        onDblClick(e);
      });
      let lastTap = 0;
      hitbox.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTap < 350 && now - lastTap > 0) {
          e.stopPropagation();
          if (e.cancelable) e.preventDefault();
          onDblClick(e);
        }
        lastTap = now;
      }, { passive: false });
    }

    group.appendChild(hitbox);
    group.appendChild(circle);
    this.svg.appendChild(group);
  }

  showLineDeleteButton(midX, midY, onDelete) {
    this.removeLineDeleteButton();

    const btn = document.createElement('div');
    btn.className = 'line-del-btn';
    btn.innerHTML = '✕';
    btn.title = "Chiziqni o'chirish";
    btn.style.position = 'absolute';
    btn.style.left = `${Math.round(midX)}px`;
    btn.style.top = `${Math.round(midY)}px`;
    btn.style.transform = 'translate(-50%, -50%)';
    btn.style.width = '28px';
    btn.style.height = '28px';
    btn.style.borderRadius = '50%';
    btn.style.background = '#e63946';
    btn.style.color = '#ffffff';
    btn.style.fontSize = '14px';
    btn.style.fontWeight = 'bold';
    btn.style.display = 'flex';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';
    btn.style.cursor = 'pointer';
    btn.style.zIndex = '999';
    btn.style.border = '2px solid #ffffff';
    btn.style.boxShadow = '0 3px 10px rgba(0,0,0,0.5)';
    btn.style.pointerEvents = 'auto';

    const handleDelete = (e) => {
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      btn.remove();
      if (onDelete) onDelete(e);
    };

    btn.addEventListener('click', handleDelete);
    btn.addEventListener('touchend', handleDelete, { passive: false });

    this.nodesLayer.appendChild(btn);

    const outsideListener = (e) => {
      if (e.target !== btn && !btn.contains(e.target)) {
        btn.remove();
        window.removeEventListener('mousedown', outsideListener);
        window.removeEventListener('touchstart', outsideListener);
      }
    };
    setTimeout(() => {
      window.addEventListener('mousedown', outsideListener);
      window.addEventListener('touchstart', outsideListener);
    }, 50);
  }

  removeLineDeleteButton() {
    if (!this.nodesLayer) return;
    this.nodesLayer.querySelectorAll('.line-del-btn').forEach(b => b.remove());
  }

  drawTableConnection(ref, t1, t2) {
    const el1 = document.getElementById(t1.domId);
    const el2 = document.getElementById(t2.domId);
    if (!el1 || !el2) return;

    const fromMult = ref.fromMult || '0..*';
    const toMult = ref.toMult || '1..1';

    const cX = t1.x + (t1.width || 200) / 2;
    const cY = t1.y + (t1.height || 120) / 2;
    const pX = t2.x + (t2.width || 200) / 2;
    const pY = t2.y + (t2.height || 120) / 2;

    const border1 = this.getTableBorderPoint(t1, pX, pY);
    const border2 = this.getTableBorderPoint(t2, cX, cY);

    const startX = Math.round(border1.x);
    const startY = Math.round(border1.y);
    const endX = Math.round(border2.x);
    const endY = Math.round(border2.y);

    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;
    const pathD = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;

    const deleteConn = (e) => {
      e?.stopPropagation();
      this.references = this.references.filter(r => r !== ref);
      this.renderCrowFootLinks();
      this.showToast(`🗑️ '${t1.name}' va '${t2.name}' o'rtasidagi bog'lanish o'chirildi!`);
      if (window.playSfx) window.playSfx('click');
    };

    // Invisible thick hitbox for easy clicking on touch & mouse
    const hitbox = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    hitbox.setAttribute('d', pathD);
    hitbox.setAttribute('stroke', 'transparent');
    hitbox.setAttribute('stroke-width', '24');
    hitbox.setAttribute('fill', 'none');
    hitbox.style.cursor = 'pointer';
    hitbox.style.pointerEvents = 'stroke';

    const showDeleteBtn = (e) => {
      e.stopPropagation();
      this.showLineDeleteButton(midX, midY, deleteConn);
    };

    const stopBubbling = (e) => {
      e.stopPropagation();
    };

    // Prevent dragging underlying table
    hitbox.addEventListener('mousedown', stopBubbling);
    hitbox.addEventListener('touchstart', stopBubbling, { passive: false });
    hitbox.addEventListener('click', showDeleteBtn);
    hitbox.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      this.removeLineDeleteButton();
      deleteConn(e);
    });
    this.svg.appendChild(hitbox);

    // Visible Connection Path
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathD);
    path.setAttribute('stroke', '#d19a52');
    path.setAttribute('stroke-width', '2.5');
    path.setAttribute('fill', 'none');
    if (ref.isDashed) {
      path.setAttribute('stroke-dasharray', '6,4');
    }
    path.style.cursor = 'pointer';
    path.style.pointerEvents = 'stroke';

    path.addEventListener('mousedown', stopBubbling);
    path.addEventListener('touchstart', stopBubbling, { passive: false });
    path.addEventListener('click', showDeleteBtn);
    path.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      this.removeLineDeleteButton();
      deleteConn(e);
    });
    this.svg.appendChild(path);

    // Touch double-tap detection on lines
    let lastTap = 0;
    const handleTap = (e) => {
      const now = Date.now();
      if (now - lastTap < 350 && now - lastTap > 0) {
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        this.removeLineDeleteButton();
        deleteConn(e);
      } else {
        this.showLineDeleteButton(midX, midY, deleteConn);
      }
      lastTap = now;
    };
    hitbox.addEventListener('touchend', handleTap, { passive: false });
    path.addEventListener('touchend', handleTap, { passive: false });

    // Draggable start and end handles: allows grabbing either end to re-attach to another table
    const onStartHandleDrag = (e) => {
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      this.references = this.references.filter(r => r !== ref);
      const newLine = {
        id: 'sline_' + Math.random().toString(36).substr(2, 9),
        startX: startX,
        startY: startY,
        endX: endX,
        endY: endY,
        fromMult: fromMult,
        toMult: toMult,
        isDashed: ref.isDashed,
        startSnapped: null,
        endSnapped: { table: t2 }
      };
      this.standaloneLines.push(newLine);
      this.draggingHandle = { line: newLine, handle: 'start' };
      this.renderCrowFootLinks();
    };

    const onEndHandleDrag = (e) => {
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      this.references = this.references.filter(r => r !== ref);
      const newLine = {
        id: 'sline_' + Math.random().toString(36).substr(2, 9),
        startX: startX,
        startY: startY,
        endX: endX,
        endY: endY,
        fromMult: fromMult,
        toMult: toMult,
        isDashed: ref.isDashed,
        startSnapped: { table: t1 },
        endSnapped: null
      };
      this.standaloneLines.push(newLine);
      this.draggingHandle = { line: newLine, handle: 'end' };
      this.renderCrowFootLinks();
    };

    this.renderConnectionPortHandle(startX, startY, onStartHandleDrag, deleteConn);
    this.renderConnectionPortHandle(endX, endY, onEndHandleDrag, deleteConn);

    // Draw multiplicity symbols on From side
    const sign = border1.dirX >= 0 ? 1 : -1;
    this.drawMultiplicitySymbol(fromMult, startX, startY, sign);

    // Draw multiplicity symbols on To side
    const pSign = border2.dirX >= 0 ? 1 : -1;
    this.drawMultiplicitySymbol(toMult, endX, endY, pSign);

    // Multiplicity badges positioned outside borders
    const mx1 = startX + border1.dirX * 32;
    const my1 = startY + border1.dirY * 32;
    const mx2 = endX + border2.dirX * 32;
    const my2 = endY + border2.dirY * 32;

    this.renderMultiplicityPill(fromMult, mx1, my1, (ev) => this.openMultiplicityPopover(ref, ev), deleteConn);
    this.renderMultiplicityPill(toMult, mx2, my2, (ev) => this.openMultiplicityPopover(ref, ev), deleteConn);
    // End multiplicities are rendered at both borders cleanly
  }

  drawMultiplicitySymbol(mult, x, y, dir) {
    if (mult === '0..*') {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', x + dir * 18);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', '4');
      circle.setAttribute('fill', '#1e1916');
      circle.setAttribute('stroke', '#dfc288');
      circle.setAttribute('stroke-width', '1.8');
      this.svg.appendChild(circle);

      const cf = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      cf.setAttribute('d', `M ${x + dir * 12} ${y - 8} L ${x} ${y} L ${x + dir * 12} ${y + 8} M ${x + dir * 12} ${y} L ${x} ${y}`);
      cf.setAttribute('stroke', '#dfc288');
      cf.setAttribute('stroke-width', '1.8');
      cf.setAttribute('fill', 'none');
      this.svg.appendChild(cf);
    } else if (mult === '1..*') {
      const bar = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      bar.setAttribute('x1', x + dir * 18);
      bar.setAttribute('y1', y - 7);
      bar.setAttribute('x2', x + dir * 18);
      bar.setAttribute('y2', y + 7);
      bar.setAttribute('stroke', '#c8a96e');
      bar.setAttribute('stroke-width', '1.8');
      this.svg.appendChild(bar);

      const cf = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      cf.setAttribute('d', `M ${x + dir * 12} ${y - 8} L ${x} ${y} L ${x + dir * 12} ${y + 8} M ${x + dir * 12} ${y} L ${x} ${y}`);
      cf.setAttribute('stroke', '#dfc288');
      cf.setAttribute('stroke-width', '1.8');
      cf.setAttribute('fill', 'none');
      this.svg.appendChild(cf);
    } else if (mult === '0..1') {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', x + dir * 16);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', '4');
      circle.setAttribute('fill', '#1e1916');
      circle.setAttribute('stroke', '#dfc288');
      circle.setAttribute('stroke-width', '1.8');
      this.svg.appendChild(circle);

      const bar = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      bar.setAttribute('x1', x + dir * 7);
      bar.setAttribute('y1', y - 8);
      bar.setAttribute('x2', x + dir * 7);
      bar.setAttribute('y2', y + 8);
      bar.setAttribute('stroke', '#c8a96e');
      bar.setAttribute('stroke-width', '1.8');
      this.svg.appendChild(bar);
    } else if (mult === '1..1') {
      const bar1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      bar1.setAttribute('x1', x + dir * 6);
      bar1.setAttribute('y1', y - 8);
      bar1.setAttribute('x2', x + dir * 6);
      bar1.setAttribute('y2', y + 8);
      bar1.setAttribute('stroke', '#c8a96e');
      bar1.setAttribute('stroke-width', '1.8');
      this.svg.appendChild(bar1);

      const bar2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      bar2.setAttribute('x1', x + dir * 13);
      bar2.setAttribute('y1', y - 8);
      bar2.setAttribute('x2', x + dir * 13);
      bar2.setAttribute('y2', y + 8);
      bar2.setAttribute('stroke', '#c8a96e');
      bar2.setAttribute('stroke-width', '1.8');
      this.svg.appendChild(bar2);
    }
  }

  renderMultiplicityPill(text, x, y, onClick) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${x}, ${y})`);
    g.style.cursor = 'pointer';
    g.style.pointerEvents = 'auto';
    g.addEventListener('click', (e) => {
      e.stopPropagation();
      onClick?.(e);
    });

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', '-16');
    rect.setAttribute('y', '-7');
    rect.setAttribute('width', '32');
    rect.setAttribute('height', '14');
    rect.setAttribute('rx', '3');
    rect.setAttribute('fill', '#1c1613');
    rect.setAttribute('stroke', '#c8a96e');
    rect.setAttribute('stroke-width', '1');
    g.appendChild(rect);

    const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    txt.setAttribute('x', '0');
    txt.setAttribute('y', '3');
    txt.setAttribute('text-anchor', 'middle');
    txt.setAttribute('fill', '#dfc288');
    txt.setAttribute('font-size', '8.5');
    txt.setAttribute('font-family', 'JetBrains Mono, monospace');
    txt.setAttribute('font-weight', '700');
    txt.textContent = text;
    g.appendChild(txt);

    this.svg.appendChild(g);
  }

  openMultiplicityPopover(ref, e) {
    let popover = document.getElementById('relMultiplicityPopover');
    if (!popover) {
      popover = document.createElement('div');
      popover.id = 'relMultiplicityPopover';
      popover.className = 'multiplicity-picker-popover';
      document.body.appendChild(popover);
    }

    const fromMult = ref.fromMult || '0..*';
    const toMult = ref.toMult || '1..1';

    popover.innerHTML = `
      <div class="mult-pop-header">
        <span class="mult-pop-title">Multiplicity & Bog'lanishni O'zgartirish</span>
        <button class="mult-pop-close" id="btnCloseMultPop">✕</button>
      </div>
      <div class="mult-pop-body">
        <div>
          <div class="mult-sec-label">${ref.fromTable} tomoni:</div>
          <div class="mult-options-grid" data-side="from">
            <button class="btn-mult-opt ${fromMult === '1..1' ? 'active' : ''}" data-val="1..1"><span>||</span> 1..1 (Aniq 1)</button>
            <button class="btn-mult-opt ${fromMult === '0..1' ? 'active' : ''}" data-val="0..1"><span>○|</span> 0..1 (0 yoki 1)</button>
            <button class="btn-mult-opt ${fromMult === '1..*' ? 'active' : ''}" data-val="1..*"><span>|<</span> 1..* (1 yoki ko'p)</button>
            <button class="btn-mult-opt ${fromMult === '0..*' ? 'active' : ''}" data-val="0..*"><span>○<</span> 0..* (0 yoki ko'p)</button>
          </div>
        </div>

        <div>
          <div class="mult-sec-label">${ref.toTable} tomoni:</div>
          <div class="mult-options-grid" data-side="to">
            <button class="btn-mult-opt ${toMult === '1..1' ? 'active' : ''}" data-val="1..1"><span>||</span> 1..1 (Aniq 1)</button>
            <button class="btn-mult-opt ${toMult === '0..1' ? 'active' : ''}" data-val="0..1"><span>○|</span> 0..1 (0 yoki 1)</button>
            <button class="btn-mult-opt ${toMult === '1..*' ? 'active' : ''}" data-val="1..*"><span>|<</span> 1..* (1 yoki ko'p)</button>
            <button class="btn-mult-opt ${toMult === '0..*' ? 'active' : ''}" data-val="0..*"><span>○<</span> 0..* (0 yoki ko'p)</button>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:2px;">
          <label style="font-size:11px; color:var(--text-secondary); display:flex; align-items:center; gap:5px; cursor:pointer;">
            <input type="checkbox" id="chkLineDashed" ${ref.isDashed ? 'checked' : ''}>
            <span>Uzuk-uzuk (Ixtiyoriy/Zaif)</span>
          </label>
        </div>

        <button class="btn-mult-del" id="btnDelRefLink">✕ Ushbu bog'lanishni o'chirish</button>
      </div>
    `;

    // Position popover right adjacent to the clicked element
    const target = e?.currentTarget || e?.target;
    const rect = target?.getBoundingClientRect ? target.getBoundingClientRect() : null;

    let posX = window.innerWidth / 2 - 140;
    let posY = window.innerHeight / 2 - 100;

    if (rect) {
      posX = rect.left + rect.width / 2 - 140;
      posY = rect.bottom + 8;
      if (posY + 320 > window.innerHeight) {
        posY = rect.top - 320;
      }
    } else if (e?.clientX !== undefined) {
      posX = e.clientX - 140;
      posY = e.clientY + 10;
    }

    posX = Math.max(10, Math.min(window.innerWidth - 290, posX));
    posY = Math.max(10, Math.min(window.innerHeight - 340, posY));

    popover.style.position = 'fixed';
    popover.style.left = posX + 'px';
    popover.style.top = posY + 'px';
    popover.style.zIndex = '99999';
    popover.style.display = 'flex';

    // Event listeners
    popover.querySelector('#btnCloseMultPop')?.addEventListener('click', () => {
      popover.style.display = 'none';
    });

    popover.querySelectorAll('[data-side="from"] .btn-mult-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        ref.fromMult = btn.getAttribute('data-val');
        this.renderCrowFootLinks();
        this.openMultiplicityPopover(ref, e);
      });
    });

    popover.querySelectorAll('[data-side="to"] .btn-mult-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        ref.toMult = btn.getAttribute('data-val');
        this.renderCrowFootLinks();
        this.openMultiplicityPopover(ref, e);
      });
    });

    popover.querySelector('#chkLineDashed')?.addEventListener('change', (ev) => {
      ref.isDashed = ev.target.checked;
      this.renderCrowFootLinks();
    });

    popover.querySelector('#btnDelRefLink')?.addEventListener('click', () => {
      this.references = this.references.filter(r => r !== ref);
      popover.style.display = 'none';
      this.renderCrowFootLinks();
      if (window.playSfx) window.playSfx('click');
    });

    // Close on outside click
    const closeOnOutside = (evt) => {
      if (!popover.contains(evt.target) && !evt.target.closest('.line-mult-pill')) {
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

    // Search filter
    searchInput?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll('#shapeGridER .shape-card').forEach(card => {
        const text = (card.textContent + ' ' + (card.getAttribute('title') || '')).toLowerCase();
        card.style.display = !q || text.includes(q) ? 'flex' : 'none';
      });
    });

    // Shape card click handlers
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
    const centerX = Math.round(-this.panX / this.zoom + (this.container.offsetWidth / 2) / this.zoom - 100);
    const centerY = Math.round(-this.panY / this.zoom + (this.container.offsetHeight / 2) / this.zoom - 60);

    if (type === 'table' || type === 'table-key') {
      this.addTable({ x: centerX, y: centerY });
    } else if (type === 'table-2col') {
      this.addTable({ tableName: 'Jadval_2Ustun', x: centerX, y: centerY, columns: [{ name: 'pk_id', isPK: true }, { name: 'qiymat', isPK: false }] });
    } else if (type === 'table-rounded') {
      this.addTable({ tableName: 'YumaloqJadval', x: centerX, y: centerY, columns: [{ name: 'id', isPK: true }, { name: 'nomi', isPK: false }] });
    } else if (type === 'item-box') {
      this.addTable({ tableName: 'Element', x: centerX, y: centerY, columns: [{ name: 'qiymat', isPK: false }] });
    } else if (type === 'entity' || type === 'entity-plain') {
      this.addTable({ tableName: 'Entitiy', x: centerX, y: centerY, columns: [{ name: 'id', isPK: true }, { name: 'nomi', isPK: false }] });
    } else if (type === 'entity-rounded') {
      this.addTable({ tableName: 'YumaloqEntitiy', x: centerX, y: centerY, columns: [{ name: 'id', isPK: true }, { name: 'tavsif', isPK: false }] });
    } else if (type === 'weak-entity') {
      this.addTable({ tableName: 'ZaifEntitiy', x: centerX, y: centerY, columns: [{ name: 'qisman_id', isPK: true, isFK: true }, { name: 'tavsif', isPK: false }] });
    } else if (type === 'assoc-entity') {
      this.addTable({ tableName: 'BoglovchiJadval', x: centerX, y: centerY, columns: [{ name: 'id1_fk', isPK: true, isFK: true }, { name: 'id2_fk', isPK: true, isFK: true }, { name: 'sana', isPK: false }] });
    } else if (type === 'domain-cloud') {
      this.addTable({ tableName: 'Tashqi Domen (Cloud)', x: centerX, y: centerY, columns: [{ name: 'api_boglam', isPK: false }] });
    } else if (type === 'partition-box') {
      this.addTable({ tableName: 'Qism / Modul', x: centerX, y: centerY, columns: [{ name: 'bolim_a', isPK: false }, { name: 'bolim_b', isPK: false }] });
    } else if (type === 'attr-plain') {
      if (this.selectedTable) {
        this.selectedTable.columns.push({ name: 'yangi_atribut', isPK: false });
        this.renderTableColumns(this.selectedTable, document.getElementById(this.selectedTable.domId + '_body'));
      } else {
        this.addTable({ tableName: 'AtributGuruhi', x: centerX, y: centerY, columns: [{ name: 'atribut_nomi', isPK: false }] });
      }
    } else if (type === 'attr-pk') {
      if (this.selectedTable) {
        this.selectedTable.columns.push({ name: 'pk_id', isPK: true });
        this.renderTableColumns(this.selectedTable, document.getElementById(this.selectedTable.domId + '_body'));
      } else {
        this.addTable({ tableName: 'KalitGuruhi', x: centerX, y: centerY, columns: [{ name: 'pk_id', isPK: true }] });
      }
    } else if (type === 'attr-multi') {
      if (this.selectedTable) {
        this.selectedTable.columns.push({ name: 'telefonlar', isPK: false, isMulti: true });
        this.renderTableColumns(this.selectedTable, document.getElementById(this.selectedTable.domId + '_body'));
      } else {
        this.addTable({ tableName: 'KopQiymatli', x: centerX, y: centerY, columns: [{ name: 'telefonlar', isPK: false }] });
      }
    } else if (type === 'attr-derived') {
      if (this.selectedTable) {
        this.selectedTable.columns.push({ name: 'yosh', isPK: false, isDerived: true });
        this.renderTableColumns(this.selectedTable, document.getElementById(this.selectedTable.domId + '_body'));
      } else {
        this.addTable({ tableName: 'Hisoblangan', x: centerX, y: centerY, columns: [{ name: 'jami_summa', isPK: false }] });
      }
    } else if (type === 'attr-partial') {
      if (this.selectedTable) {
        this.selectedTable.columns.push({ name: 'qisman_kalit', isPK: true, isFK: true });
        this.renderTableColumns(this.selectedTable, document.getElementById(this.selectedTable.domId + '_body'));
      } else {
        this.addTable({ tableName: 'QismanGuruh', x: centerX, y: centerY, columns: [{ name: 'qisman_kalit', isPK: true, isFK: true }] });
      }
    } else if (type === 'attr-composite') {
      this.addTable({ tableName: 'ManzilKompozit', x: centerX, y: centerY, columns: [{ name: 'shahar', isPK: false }, { name: 'tuman', isPK: false }, { name: 'kucha', isPK: false }] });
    } else if (type === 'rel-diamond' || type === 'rel-identifying') {
      this.addTable({ tableName: 'AloqaRombi', x: centerX, y: centerY, columns: [{ name: 'aloqa_id', isPK: true }, { name: 'sana', isPK: false }] });
    } else if (type === 'isa-circle') {
      this.addTable({ tableName: 'Subklass (d)', x: centerX, y: centerY, columns: [{ name: 'asosiy_id', isPK: true, isFK: true }, { name: 'maxsus_xususiyat', isPK: false }] });
    } else if (type === 'note-box') {
      this.addTable({ tableName: '📝 Eslatma', x: centerX, y: centerY, columns: [{ name: 'izoh_matni', isPK: false }] });
    } else if (type.startsWith('conn-')) {
      const mult1 = type === 'conn-11' ? '1..1' : type === 'conn-01' ? '0..1' : type === 'conn-1n' ? '1..*' : type === 'conn-0n' ? '0..*' : '0..*';
      const mult2 = type === 'conn-11' ? '1..1' : '1..1';
      const isDashed = type === 'conn-dashed';
      const isZigzag = type === 'conn-zigzag';

      this.standaloneLines.push({
        id: 'sline_' + Math.random().toString(36).substr(2, 9),
        startX: Math.round(centerX - 90),
        startY: Math.round(centerY),
        endX: Math.round(centerX + 90),
        endY: Math.round(centerY),
        fromMult: mult1,
        toMult: mult2,
        isDashed: isDashed,
        isZigzag: isZigzag,
        startSnapped: null,
        endSnapped: null
      });
      this.renderCrowFootLinks();
      this.showToast(`2 ta magnit uchli chiziq tushirildi (${mult1}). Har ikkala chetini kerakli jadvalga ulab oling!`);
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
  // SCHEMA PARSING & RENDERING
  // ==========================================================================
  renderSchema(schemaData) {
    this.clearCanvas();
    if (!schemaData) return;

    const w = 800;
    const h = 460;
    const tableList = schemaData.tables || (schemaData.tableName ? [schemaData] : []);
    const count = tableList.length;

    tableList.forEach((tbl, idx) => {
      let x = tbl.x;
      let y = tbl.y;

      if (x === undefined || y === undefined) {
        if (count === 1) {
          x = w / 2 - 100;
          y = h / 2 - 60;
        } else if (count === 2) {
          x = idx === 0 ? w * 0.12 : w * 0.6;
          y = h * 0.3;
        } else {
          const colIdx = idx % 2;
          const rowIdx = Math.floor(idx / 2);
          x = 40 + colIdx * (w * 0.48);
          y = 30 + rowIdx * 180;
        }
      }

      this.addTable({
        tableName: tbl.tableName || tbl.name || `Table${idx + 1}`,
        columns: tbl.columns || [],
        x: Math.round(x),
        y: Math.round(y)
      });
    });

    if (schemaData.references) {
      this.references = JSON.parse(JSON.stringify(schemaData.references));
    }

    this.renderCrowFootLinks();

    // Auto-fit to viewport on mobile screens so bottom of diagram is never cut off
    if (this.container && this.tables.length > 0) {
      setTimeout(() => {
        const containerW = this.container.clientWidth || 360;
        const containerH = this.container.clientHeight || 440;
        if (containerW < 768) {
          let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
          this.tables.forEach(t => {
            minX = Math.min(minX, t.x);
            minY = Math.min(minY, t.y);
            maxX = Math.max(maxX, t.x + (t.width || 200));
            maxY = Math.max(maxY, t.y + (t.height || 120));
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
    this.tables = [];
    this.references = [];
    this.freeLines = [];
    this.standaloneLines = [];
    this.nodesLayer.innerHTML = '';
    this.svg.innerHTML = '';
  }

  exportCurrentSchema() {
    return {
      tables: this.tables.map(t => ({
        tableName: t.name,
        name: t.name,
        columns: t.columns
      })),
      references: this.references
    };
  }
}

window.RelationalCanvasEngine = RelationalCanvasEngine;
