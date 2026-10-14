/**
 * DATABASE SYSTEMS ACADEMY — 2-HAFTA: RELATSION SXEMA DRAFTING POLOTNOSI
 * draw.io uslubidagi Relatsion Jadvallar va Crow's Foot Bog'lanish Chiziqlari Dvigateli
 * 
 * Imkoniyatlar:
 * - TableName sarlavhali relyatsion jadval qutilari
 * - PK, FK1, FK2, PK,FK1 ustun katakchalari
 * - Crow's Foot aloqa chiziqlari (Tashqi Kalitdan Birlamchi Kalitga)
 * - Drag-and-drop orqali jadvallarni qulay joylashtirish
 * - DBML va Relyatsion matnli notatsiya bilan ikki tomonlama sinxronizatsiya
 */

class RelationalCanvasEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.tables = [];
    this.references = []; // { fromTable, fromCol, toTable, toCol }

    this.isDragging = false;
    this.dragTarget = null;
    this.dragOffsetX = 0;
    this.dragOffsetY = 0;

    this.initDOM();
    this.attachEvents();
  }

  initDOM() {
    this.container.innerHTML = `
      <svg id="relCanvasSvg"></svg>
      <div class="rel-nodes-layer" id="relNodesLayer"></div>
    `;

    this.svg = document.getElementById('relCanvasSvg');
    this.nodesLayer = document.getElementById('relNodesLayer');
  }

  attachEvents() {
    window.addEventListener('mousemove', (e) => this.onPointerMove(e));
    window.addEventListener('mouseup', () => this.onPointerUp());

    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches.length > 0) {
        this.onPointerMove(e.touches[0]);
      }
    }, { passive: false });
    window.addEventListener('touchend', () => this.onPointerUp());
  }

  onPointerDown(e, table) {
    e.stopPropagation();
    this.isDragging = true;
    this.dragTarget = table;

    const rect = this.container.getBoundingClientRect();
    const pageX = e.clientX || (e.touches && e.touches[0].clientX);
    const pageY = e.clientY || (e.touches && e.touches[0].clientY);

    this.dragOffsetX = (pageX - rect.left) - table.x;
    this.dragOffsetY = (pageY - rect.top) - table.y;

    this.selectTable(table);
  }

  onPointerMove(e) {
    if (!this.isDragging || !this.dragTarget) return;

    const rect = this.container.getBoundingClientRect();
    const pageX = e.clientX || (e.touches && e.touches[0].clientX);
    const pageY = e.clientY || (e.touches && e.touches[0].clientY);

    let newX = (pageX - rect.left) - this.dragOffsetX;
    let newY = (pageY - rect.top) - this.dragOffsetY;

    newX = Math.max(10, Math.min(newX, rect.width - 200));
    newY = Math.max(10, Math.min(newY, rect.height - 140));

    this.dragTarget.x = newX;
    this.dragTarget.y = newY;

    this.updateTablePosition(this.dragTarget);
    this.renderCrowFootLinks();
  }

  onPointerUp() {
    this.isDragging = false;
    this.dragTarget = null;
  }

  selectTable(table) {
    document.querySelectorAll('.rel-table-box').forEach(el => el.classList.remove('selected'));
    const el = document.getElementById(table.domId);
    if (el) el.classList.add('selected');
  }

  updateTablePosition(table) {
    const el = document.getElementById(table.domId);
    if (!el) return;
    el.style.left = table.x + 'px';
    el.style.top = table.y + 'px';
  }

  renderSchema(schemaData) {
    this.tables = [];
    this.references = [];
    this.nodesLayer.innerHTML = '';
    this.svg.innerHTML = '';

    if (!schemaData) return;

    const containerRect = this.container.getBoundingClientRect();
    const w = containerRect.width || 800;
    const h = containerRect.height || 460;

    const tableList = schemaData.tables || (schemaData.tableName ? [schemaData] : []);
    const count = tableList.length;

    tableList.forEach((tbl, idx) => {
      let x = tbl.x;
      let y = tbl.y;

      if (x === undefined || y === undefined) {
        if (count === 1) {
          x = w / 2 - 110;
          y = h / 2 - 70;
        } else if (count === 2) {
          x = idx === 0 ? w * 0.12 : w * 0.58;
          y = h * 0.28;
        } else if (count === 3) {
          x = idx === 0 ? w * 0.08 : (idx === 1 ? w * 0.65 : w * 0.38);
          y = idx === 2 ? h * 0.58 : h * 0.18;
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

  addTable(data) {
    const id = 'tbl_' + Math.random().toString(36).substr(2, 9);
    const table = {
      id: id,
      domId: id,
      name: data.tableName || 'YangiJadval',
      columns: data.columns || [],
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

    const rowsHtml = (table.columns || []).map(col => {
      let keyClass = '';
      let keyLabel = '';

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

      return `
        <div class="rel-row" data-col="${col.name}">
          <div class="rel-key-cell ${keyClass}">${keyLabel}</div>
          <div class="rel-name-cell">
            <span>${col.name}</span>
            <span>${tagsHtml}</span>
          </div>
        </div>
      `;
    }).join('');

    el.innerHTML = `
      <div class="rel-table-header">${table.name}</div>
      <div class="rel-table-body">
        ${rowsHtml}
      </div>
    `;

    el.addEventListener('mousedown', (e) => this.onPointerDown(e, table));
    el.addEventListener('touchstart', (e) => this.onPointerDown(e, table), { passive: false });

    this.nodesLayer.appendChild(el);

    setTimeout(() => {
      table.height = el.offsetHeight || 120;
      table.width = el.offsetWidth || 200;
    }, 10);
  }

  renderCrowFootLinks() {
    this.svg.innerHTML = '';

    // Draw Crow's Foot links for FK references
    this.tables.forEach(childTable => {
      (childTable.columns || []).forEach(col => {
        if (col.isFK && col.references) {
          const parentTable = this.tables.find(t => t.name.toLowerCase() === col.references.table.toLowerCase());
          if (parentTable) {
            this.drawCrowFootConnection(childTable, col.name, parentTable, col.references.column);
          }
        }
      });
    });

    // Also draw explicit references
    this.references.forEach(ref => {
      const childTable = this.tables.find(t => t.name.toLowerCase() === ref.fromTable.toLowerCase());
      const parentTable = this.tables.find(t => t.name.toLowerCase() === ref.toTable.toLowerCase());
      if (childTable && parentTable) {
        this.drawCrowFootConnection(childTable, ref.fromCol, parentTable, ref.toCol);
      }
    });
  }

  drawCrowFootConnection(childTable, childCol, parentTable, parentCol) {
    const childEl = document.getElementById(childTable.domId);
    const parentEl = document.getElementById(parentTable.domId);
    if (!childEl || !parentEl) return;

    // Center coordinates
    const cX = childTable.x + (childTable.width || 200) / 2;
    const cY = childTable.y + (childTable.height || 120) / 2;
    const pX = parentTable.x + (parentTable.width || 200) / 2;
    const pY = parentTable.y + (parentTable.height || 120) / 2;

    // Connect from edge to edge
    let startX = childTable.x + (childTable.width || 200);
    let startY = cY;
    let endX = parentTable.x;
    let endY = pY;

    if (childTable.x > parentTable.x) {
      startX = childTable.x;
      endX = parentTable.x + (parentTable.width || 200);
    }

    // Bezier path
    const midX = (startX + endX) / 2;
    const pathD = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathD);
    path.setAttribute('stroke', '#d19a52');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('fill', 'none');
    this.svg.appendChild(path);

    // Crow's foot symbol on child side (FK side)
    const angle = startX < endX ? 0 : Math.PI;
    const cf = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const sign = startX < endX ? 1 : -1;
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

  clearCanvas() {
    this.tables = [];
    this.references = [];
    this.nodesLayer.innerHTML = '';
    this.svg.innerHTML = '';
  }
}

window.RelationalCanvasEngine = RelationalCanvasEngine;
