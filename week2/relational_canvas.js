/**
 * DATABASE SYSTEMS ACADEMY — 2-HAFTA: DRAW.IO RELATIONAL SCHEMA CANVAS ENGINE
 * draw.io uslubidagi barcha professional imkoniyatlar bilan jihozlangan:
 * 1. Port strelkalari (Yuqori, O'ng, Past, Chap) & Strelkani sudrab ikkinchi jadvalga ulash (Drag-to-Connect)
 * 2. Crow's Foot (|| va o<) bog'lanish chiziqlarini avtomatik chizish
 * 3. Sichqoncha g'ildiragi bilan masshtablash (Mouse Wheel Zoom) & Polotnoni surish (Pan)
 * 4. Jadval boshqaruvlari: (+) Ustun qo'shish, (✎) Jadval nomini tahrirlash, (✕) O'chirish
 * 5. Har bir ustunda: [PK] / [FK1] / [PK,FK1] / [Oddiy] aylantirish, {U} va {null} teglari, nomini o'zgartirish va (✕) o'chirish
 * 6. draw.io XML va Relyatsion modelga to'g'ridan-to'g'ri eksport
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

    this.initDOM();
    this.attachEvents();
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
      if (e.touches.length === 1 && (e.target === this.container || e.target === this.svg || e.target === this.nodesLayer || e.target === this.viewport)) {
        this.deselectAll();
        this.cancelConnecting();
        this.isPanning = true;
        this.startPanX = e.touches[0].clientX - this.panX;
        this.startPanY = e.touches[0].clientY - this.panY;
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (this.isPanning || this.isDraggingNode || this.isConnecting) {
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
    if (this.isPanning) {
      this.panX = e.clientX - this.startPanX;
      this.panY = e.clientY - this.startPanY;
      this.updateViewportTransform();
      return;
    }

    if (this.isDraggingNode && this.draggedTable) {
      const world = this.screenToWorld(e.clientX, e.clientY);
      this.draggedTable.x = Math.round(world.x - this.dragOffsetX);
      this.draggedTable.y = Math.round(world.y - this.dragOffsetY);

      this.updateTableDOMPosition(this.draggedTable);
      this.renderCrowFootLinks();
      return;
    }

    if (this.isConnecting && this.connectSource) {
      const world = this.screenToWorld(e.clientX, e.clientY);
      this.connectMovedDist = (this.connectMovedDist || 0) + Math.hypot(world.x - this.connectCurrentX, world.y - this.connectCurrentY);
      this.connectCurrentX = world.x;
      this.connectCurrentY = world.y;
      this.renderTemporaryConnectingLine();
    }
  }

  onPointerUp(e) {
    if (this.isPanning) {
      this.isPanning = false;
      this.container.style.cursor = 'default';
    }

    if (this.isDraggingNode) {
      this.isDraggingNode = false;
      this.draggedTable = null;
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

  completeTableConnection(childTable, targetTable) {
    // Shunchaki ikki jadval o'rtasiga bog'lanish chizig'ini tortadi.
    // Avtomatik tarzda FK ustuni yoki PK yaratilmaydi!
    // O'quvchining o'zi qaysi tomonda PK yoki FK ekanligini mustaqil hal qiladi.
    const alreadyExists = this.references.some(r => 
      (r.fromTable === childTable.name && r.toTable === targetTable.name) ||
      (r.fromTable === targetTable.name && r.toTable === childTable.name)
    );
    if (!alreadyExists) {
      this.references.push({
        fromTable: childTable.name,
        toTable: targetTable.name
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

      if (targetBox && targetBox.id !== this.connectSource.table.domId) {
        const targetTable = this.tables.find(t => t.domId === targetBox.id);
        const childTable = this.connectSource.table;

        if (childTable && targetTable) {
          this.completeTableConnection(childTable, targetTable);
          this.cancelConnecting();
          return;
        }
      }
    }

    // Agar o'quvchi bo'sh sohaga masofa tortgan bo'lsa (> 20px), bekor qilamiz
    if (this.connectMovedDist > 20) {
      this.cancelConnecting();
    }
    // Agar kamroq harakat bo'lsa (portga tegingan bo'lsa), Tap-to-Connect uchun kutamiz
  }

  // ==========================================================================
  // TABLE SELECTION & DRAGGING
  // ==========================================================================
  onTablePointerDown(point, table) {
    // Tap-to-connect destination reached
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
    `;

    this.renderTableColumns(table, el.querySelector('.rel-table-body'));

    // Drag events (Mouse + Touch)
    const onTableStart = (e) => {
      if (e.target.closest('.port-arrow') || e.target.closest('button') || e.target.closest('.pk-badge') || e.target.closest('.fk-badge') || e.target.closest('.type-badge') || e.target.closest('.btn-row-del') || e.target.closest('[contenteditable="true"]')) return;
      if (e.touches && e.touches.length > 1) return;
      e.stopPropagation();
      if (e.cancelable && e.type === 'touchstart') e.preventDefault();
      const point = e.touches ? e.touches[0] : e;
      this.onTablePointerDown(point, table);
    };
    el.addEventListener('mousedown', onTableStart);
    el.addEventListener('touchstart', onTableStart, { passive: false });

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
          <span class="attr-name" contenteditable="true" spellcheck="false">${col.name}</span>
          <div style="display:flex; align-items:center; gap:3px;">
            <span>${tagsHtml}</span>
            <button class="btn-attr-del" title="Ustunni o'chirish">✕</button>
          </div>
        </div>
      `;

      // Inline rename
      const nameEl = row.querySelector('.attr-name');
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
        } else {
          col.isPK = false;
          col.isFK = false;
        }
        this.renderTableColumns(table, containerEl);
        this.renderCrowFootLinks();
        if (window.playSfx) window.playSfx('click');
      });

      // Delete column
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
  // RENDERING CROW'S FOOT CONNECTOR LINES
  // ==========================================================================
  renderCrowFootLinks() {
    this.svg.innerHTML = '';

    this.references.forEach(ref => {
      const t1 = this.tables.find(t => t.name.toLowerCase() === ref.fromTable.toLowerCase());
      const t2 = this.tables.find(t => t.name.toLowerCase() === ref.toTable.toLowerCase());
      if (t1 && t2) {
        this.drawTableConnection(t1, t2);
      }
    });
  }

  drawTableConnection(t1, t2) {
    const el1 = document.getElementById(t1.domId);
    const el2 = document.getElementById(t2.domId);
    if (!el1 || !el2) return;

    // Check which table has FK column
    const t1HasFK = (t1.columns || []).some(c => c.isFK);
    const t2HasFK = (t2.columns || []).some(c => c.isFK);

    let childTable = t1;
    let parentTable = t2;
    let showSymbols = false;

    if (t1HasFK && !t2HasFK) {
      childTable = t1;
      parentTable = t2;
      showSymbols = true;
    } else if (t2HasFK && !t1HasFK) {
      childTable = t2;
      parentTable = t1;
      showSymbols = true;
    } else if (t1HasFK && t2HasFK) {
      childTable = t1;
      parentTable = t2;
      showSymbols = true;
    }

    const cX = childTable.x + (childTable.width || 200) / 2;
    const cY = childTable.y + (childTable.height || 120) / 2;
    const pX = parentTable.x + (parentTable.width || 200) / 2;
    const pY = parentTable.y + (parentTable.height || 120) / 2;

    let startX = childTable.x + (childTable.width || 200);
    let startY = cY;
    let endX = parentTable.x;
    let endY = pY;

    if (childTable.x > parentTable.x) {
      startX = childTable.x;
      endX = parentTable.x + (parentTable.width || 200);
    }

    const midX = (startX + endX) / 2;
    const pathD = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathD);
    path.setAttribute('stroke', '#d19a52');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('fill', 'none');
    this.svg.appendChild(path);

    if (showSymbols) {
      // Crow's foot symbol on child side (FK side)
      const sign = startX < endX ? 1 : -1;
      const cf = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const cfD = `
        M ${startX + sign * 14} ${startY - 8} L ${startX} ${startY} L ${startX + sign * 14} ${startY + 8}
        M ${startX + sign * 14} ${startY} L ${startX} ${startY}
      `;
      cf.setAttribute('d', cfD);
      cf.setAttribute('stroke', '#dfc288');
      cf.setAttribute('stroke-width', '2');
      cf.setAttribute('fill', 'none');
      this.svg.appendChild(cf);

      // Double bars (||) on parent side (PK side)
      const pSign = startX < endX ? -1 : 1;
      const bar1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      bar1.setAttribute('x1', endX + pSign * 6);
      bar1.setAttribute('y1', endY - 8);
      bar1.setAttribute('x2', endX + pSign * 6);
      bar1.setAttribute('y2', endY + 8);
      bar1.setAttribute('stroke', '#c8a96e');
      bar1.setAttribute('stroke-width', '2');
      this.svg.appendChild(bar1);

      const bar2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      bar2.setAttribute('x1', endX + pSign * 11);
      bar2.setAttribute('y1', endY - 8);
      bar2.setAttribute('x2', endX + pSign * 11);
      bar2.setAttribute('y2', endY + 8);
      bar2.setAttribute('stroke', '#c8a96e');
      bar2.setAttribute('stroke-width', '2');
      this.svg.appendChild(bar2);
    }
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
