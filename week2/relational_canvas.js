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
      if (e.target === this.container || e.target === this.svg || e.target === this.nodesLayer || e.target === this.viewport) {
        this.deselectAll();
        this.cancelConnecting();
        this.isPanning = true;
        this.startPanX = e.clientX - this.panX;
        this.startPanY = e.clientY - this.panY;
        this.container.style.cursor = 'grabbing';
      }
    });

    // 3. Pointer move for dragging table, panning, or connection line
    window.addEventListener('mousemove', (e) => this.onPointerMove(e));
    window.addEventListener('mouseup', (e) => this.onPointerUp(e));

    // Touch support (Mobile phones & tablets)
    this.container.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
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
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        this.lastTouchPoint = { clientX: touch.clientX, clientY: touch.clientY };
        this.onPointerMove(touch);
      }
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
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
    // Panning canvas
    if (this.isPanning) {
      this.panX = e.clientX - this.startPanX;
      this.panY = e.clientY - this.startPanY;
      this.updateViewportTransform();
      return;
    }

    // Dragging Connection Line from a port
    if (this.isConnecting && this.connectSource) {
      const world = this.screenToWorld(e.clientX, e.clientY);
      this.connectCurrentX = world.x;
      this.connectCurrentY = world.y;
      this.connectMovedDist += 5;
      this.renderTemporaryConnectingLine();
      return;
    }

    // Dragging Table Node
    if (this.isDraggingNode && this.draggedTable) {
      const world = this.screenToWorld(e.clientX, e.clientY);
      this.draggedTable.x = Math.round(world.x - this.dragOffsetX);
      this.draggedTable.y = Math.round(world.y - this.dragOffsetY);
      this.updateTableDOMPosition(this.draggedTable);

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

    // Resizing Table (draw.io corner drag)
    if (this.isResizing && this.resizingNode) {
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
  }

  onPointerUp(e) {
    if (this.isPanning) {
      this.isPanning = false;
      this.container.style.cursor = 'default';
    }

    // Magnetic snap when table is dropped near a free-line end
    if (this.isDraggingNode && this.draggedTable && this.snapCandidate) {
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
      if (e.target.closest('.port-arrow') || e.target.closest('button') || e.target.closest('.node-resize-handle') || e.target.closest('.pk-badge') || e.target.closest('.fk-badge') || e.target.closest('.type-badge') || e.target.closest('.btn-row-del') || e.target.closest('.btn-attr-edit') || e.target.closest('[contenteditable="true"]')) return;
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

      // Cycle key badge: PK -> FK1 -> PK,FK1 -> None
      row.querySelector('.btn-attr-badge')?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!col.isPK && !col.isFK) {
          col.isPK = true;
          col.isFK = false;
        } else if (col.isPK && !col.isFK) {
          col.isPK = false;
          col.isFK = true;
          col.fkTag = 'FK1';
        } else if (!col.isPK && col.isFK) {
          col.isPK = true;
          col.isFK = true;
          col.fkTag = 'FK1';
        } else {
          col.isPK = false;
          col.isFK = false;
        }
        this.renderTableColumns(table, containerEl);
        this.renderCrowFootLinks();
      });

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
  renderCrowFootLinks() {
    this.svg.innerHTML = '';

    this.references.forEach(ref => {
      const t1 = this.tables.find(t => t.name.toLowerCase() === ref.fromTable.toLowerCase());
      const t2 = this.tables.find(t => t.name.toLowerCase() === ref.toTable.toLowerCase());
      if (t1 && t2) {
        this.drawTableConnection(ref, t1, t2);
      }
    });

    // Render Free-Standing Connection Lines
    this.freeLines = this.freeLines.filter(fl => {
      return this.tables.some(t => t.domId === fl.table.domId);
    });

    this.freeLines.forEach((fl, idx) => {
      const start = this.getPortCoords(fl.table, fl.port);
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', start.x);
      line.setAttribute('y1', start.y);
      line.setAttribute('x2', fl.endX);
      line.setAttribute('y2', fl.endY);
      line.setAttribute('stroke', '#dfc288');
      line.setAttribute('stroke-width', '2.5');
      line.setAttribute('stroke-linecap', 'round');
      this.svg.appendChild(line);

      // Endpoint circle handle with magnetic attraction
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
        this.startPortConnection(fl.table, fl.port);
        const point = e.touches ? e.touches[0] : e;
        const world = this.screenToWorld(point.clientX, point.clientY);
        this.connectCurrentX = world.x;
        this.connectCurrentY = world.y;
        this.renderCrowFootLinks();
      };
      circle.addEventListener('mousedown', startDragHandle);
      circle.addEventListener('touchstart', startDragHandle, { passive: false });

      circle.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        this.freeLines.splice(idx, 1);
        this.renderCrowFootLinks();
      });

      this.svg.appendChild(circle);
    });
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

    let startX = t1.x + (t1.width || 200);
    let startY = cY;
    let endX = t2.x;
    let endY = pY;

    if (t1.x > t2.x) {
      startX = t1.x;
      endX = t2.x + (t2.width || 200);
    }

    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;
    const pathD = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;

    // Invisible thick hitbox for easy clicking on touch & mouse
    const hitbox = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    hitbox.setAttribute('d', pathD);
    hitbox.setAttribute('stroke', 'transparent');
    hitbox.setAttribute('stroke-width', '20');
    hitbox.setAttribute('fill', 'none');
    hitbox.style.cursor = 'pointer';
    hitbox.style.pointerEvents = 'stroke';
    hitbox.addEventListener('click', (e) => {
      e.stopPropagation();
      this.openMultiplicityPopover(ref, e);
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
    path.addEventListener('click', (e) => {
      e.stopPropagation();
      this.openMultiplicityPopover(ref, e);
    });
    this.svg.appendChild(path);

    // Draw multiplicity symbols on From side (startX, startY)
    const sign = startX < endX ? 1 : -1;
    this.drawMultiplicitySymbol(fromMult, startX, startY, sign);

    // Draw multiplicity symbols on To side (endX, endY)
    const pSign = startX < endX ? -1 : 1;
    this.drawMultiplicitySymbol(toMult, endX, endY, pSign);

    // Clickable interactive pills on From & To sides and midpoint
    this.renderMultiplicityPill(fromMult, startX + sign * 28, startY - 14, (ev) => this.openMultiplicityPopover(ref, ev));
    this.renderMultiplicityPill(toMult, endX + pSign * 28, endY - 14, (ev) => this.openMultiplicityPopover(ref, ev));

    // Midpoint link pill
    const midGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    midGroup.setAttribute('transform', `translate(${midX}, ${midY})`);
    midGroup.style.cursor = 'pointer';
    midGroup.style.pointerEvents = 'auto';
    midGroup.addEventListener('click', (e) => {
      e.stopPropagation();
      this.openMultiplicityPopover(ref, e);
    });

    const midRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    midRect.setAttribute('x', '-40');
    midRect.setAttribute('y', '-11');
    midRect.setAttribute('width', '80');
    midRect.setAttribute('height', '22');
    midRect.setAttribute('rx', '4');
    midRect.setAttribute('fill', '#251e18');
    midRect.setAttribute('stroke', '#c8a96e');
    midRect.setAttribute('stroke-width', '1');
    midGroup.appendChild(midRect);

    const midText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    midText.setAttribute('x', '0');
    midText.setAttribute('y', '4');
    midText.setAttribute('text-anchor', 'middle');
    midText.setAttribute('fill', '#dfc288');
    midText.setAttribute('font-size', '9.5');
    midText.setAttribute('font-family', 'JetBrains Mono, monospace');
    midText.setAttribute('font-weight', '700');
    midText.textContent = `${fromMult} ↔ ${toMult}`;
    midGroup.appendChild(midText);

    this.svg.appendChild(midGroup);
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

    // Position popover near click
    const clientX = e?.clientX !== undefined ? e.clientX : window.innerWidth / 2;
    const clientY = e?.clientY !== undefined ? e.clientY : window.innerHeight / 2;
    const posX = Math.max(10, Math.min(window.innerWidth - 300, clientX - 140));
    const posY = Math.max(10, Math.min(window.innerHeight - 340, clientY - 80));

    popover.style.left = posX + 'px';
    popover.style.top = posY + 'px';
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

    if (type === 'table') {
      this.addTable({ x: centerX, y: centerY });
    } else if (type === 'entity') {
      this.addTable({ tableName: 'Entitiy', x: centerX, y: centerY, columns: [{ name: 'id', isPK: true }, { name: 'nomi', isPK: false }] });
    } else if (type === 'weak-entity') {
      this.addTable({ tableName: 'ZaifEntitiy', x: centerX, y: centerY, columns: [{ name: 'qisman_id', isPK: true }, { name: 'tavsif', isPK: false }] });
    } else if (type === 'assoc-entity') {
      this.addTable({ tableName: 'BoglovchiJadval', x: centerX, y: centerY, columns: [{ name: 'id1_fk', isPK: true, isFK: true }, { name: 'id2_fk', isPK: true, isFK: true }, { name: 'sana', isPK: false }] });
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
    } else if (type === 'attr-composite') {
      this.addTable({ tableName: 'ManzilKompozit', x: centerX, y: centerY, columns: [{ name: 'shahar', isPK: false }, { name: 'tuman', isPK: false }, { name: 'kucha', isPK: false }] });
    } else if (type === 'rel-diamond' || type === 'rel-identifying') {
      this.addTable({ tableName: 'AloqaRombi', x: centerX, y: centerY, columns: [{ name: 'aloqa_id', isPK: true }, { name: 'sana', isPK: false }] });
    } else if (type === 'isa-circle') {
      this.addTable({ tableName: 'Subklass (d)', x: centerX, y: centerY, columns: [{ name: 'asosiy_id', isPK: true, isFK: true }, { name: 'maxsus_xususiyat', isPK: false }] });
    } else if (type === 'note-box') {
      this.addTable({ tableName: '📝 Eslatma', x: centerX, y: centerY, columns: [{ name: 'izoh_matni', isPK: false }] });
    } else if (type.startsWith('conn-')) {
      const mult = type === 'conn-11' ? '1..1' : type === 'conn-01' ? '0..1' : type === 'conn-1n' ? '1..*' : '0..*';
      if (this.tables.length > 0) {
        const src = this.selectedTable || this.tables[0];
        this.freeLines.push({
          id: 'free_' + Math.random().toString(36).substr(2, 9),
          table: src,
          port: 'right',
          mult: mult,
          endX: Math.round(src.x + (src.width || 200) + 120),
          endY: Math.round(src.y + (src.height || 120) / 2)
        });
        this.renderCrowFootLinks();
        this.showToast(`Chiziq yaratildi (${mult}). Entitiyga yaqin olib borsangiz magnit kabi ulanadi!`);
      }
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
  }

  clearCanvas() {
    this.tables = [];
    this.references = [];
    this.freeLines = [];
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
