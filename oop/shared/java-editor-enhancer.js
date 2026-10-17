// ============================================================================
// OOP ACADEMY — SMART JAVA EDITOR ENHANCER (PROFESSOR ADA)
// 1. Intelligent Auto-Indentation on Enter (4 spaces inside classes & methods)
// 2. Bracket splitting & expansion ({|} -> creates indented block)
// 3. Dynamic Class Autocomplete & IntelliSense Variants
// 4. Smart Quick Suggestion Chips Bar (one-tap insertion for classes & keywords)
// 5. Smart Backspace & Auto-Closing Bracket Pairs
// ============================================================================

(function (global) {
  "use strict";

  const JavaEditorEnhancer = {
    codeArea: null,
    dropdownEl: null,
    chipsBarEl: null,
    mirrorEl: null,
    currentChallenge: null,
    knownClasses: new Set(["Main"]),
    suggestions: [],
    selectedIndex: 0,
    isOpen: false,
    currentFilterWord: "",
    wordStartIndex: 0,

    init(textareaId, challenge) {
      this.codeArea = document.getElementById(textareaId);
      if (!this.codeArea) return;

      this.currentChallenge = challenge || null;
      this.createUIElements();
      this.bindEvents();
      this.scanCodeForClasses();
      this.renderChipsBar();
    },

    setChallenge(ch) {
      if (!this.codeArea) {
        this.init("codeEditor", ch);
        return;
      }
      this.currentChallenge = ch;
      this.scanCodeForClasses();
      this.renderChipsBar();
    },

    createUIElements() {
      // 1. Create Smart Suggestion Chips Bar if not exists
      const wrapper = this.codeArea.closest(".editor-wrapper");
      if (wrapper && !document.getElementById("smartSuggestionChipsBar")) {
        const chipsBar = document.createElement("div");
        chipsBar.id = "smartSuggestionChipsBar";
        chipsBar.className = "smart-suggestion-chips-bar";

        // Insert right above textarea (or right below quick-keys bar)
        const quickKeys = wrapper.querySelector(".editor-quick-keys");
        if (quickKeys) {
          quickKeys.insertAdjacentElement("afterend", chipsBar);
        } else {
          wrapper.insertBefore(chipsBar, this.codeArea);
        }
        this.chipsBarEl = chipsBar;
      } else {
        this.chipsBarEl = document.getElementById("smartSuggestionChipsBar");
      }

      // 2. Create Autocomplete Dropdown if not exists
      if (wrapper && !document.getElementById("codeAutocompleteDropdown")) {
        const dropdown = document.createElement("div");
        dropdown.id = "codeAutocompleteDropdown";
        dropdown.className = "code-autocomplete-dropdown";
        dropdown.style.display = "none";
        wrapper.appendChild(dropdown);
        this.dropdownEl = dropdown;
      } else {
        this.dropdownEl = document.getElementById("codeAutocompleteDropdown");
      }

      // 3. Inject CSS Styles dynamically
      this.injectStyles();
    },

    injectStyles() {
      if (document.getElementById("javaEditorEnhancerStyles")) return;
      const style = document.createElement("style");
      style.id = "javaEditorEnhancerStyles";
      style.textContent = `
        /* Smart Suggestion Chips Bar */
        .smart-suggestion-chips-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          background: #0d0a1c;
          border-bottom: 1px solid rgba(168, 85, 247, 0.25);
          overflow-x: auto;
          white-space: nowrap;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          z-index: 5;
        }
        .smart-suggestion-chips-bar::-webkit-scrollbar {
          display: none;
        }
        .chip-label-prefix {
          font-size: 11px;
          font-weight: 700;
          color: #a855f7;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-right: 4px;
          flex-shrink: 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          user-select: none;
        }
        .smart-chip-btn {
          background: #191433;
          border: 1px solid rgba(168, 85, 247, 0.4);
          color: #d8b4fe;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          font-weight: 600;
          padding: 3px 9px;
          border-radius: 6px;
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.15s ease;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          touch-action: manipulation;
        }
        .smart-chip-btn:hover {
          background: #271f4d;
          border-color: #a855f7;
          color: #fff;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.35);
          transform: translateY(-1px);
        }
        .smart-chip-btn:active {
          background: #7c3aed;
          color: #fff;
          transform: scale(0.96);
        }
        .smart-chip-btn.chip-class {
          background: rgba(124, 58, 237, 0.25);
          border-color: #9333ea;
          color: #f3e8ff;
          font-weight: 700;
        }
        .smart-chip-btn.chip-class:hover {
          background: #7c3aed;
          color: #fff;
        }
        .smart-chip-btn.chip-new {
          background: rgba(6, 182, 212, 0.15);
          border-color: rgba(6, 182, 212, 0.45);
          color: #67e8f9;
        }
        .smart-chip-btn.chip-new:hover {
          background: #0891b2;
          color: #fff;
        }
        .smart-chip-btn.chip-template {
          background: rgba(16, 185, 129, 0.15);
          border-color: rgba(16, 185, 129, 0.45);
          color: #6ee7b7;
        }
        .smart-chip-btn.chip-template:hover {
          background: #059669;
          color: #fff;
        }

        /* Floating Autocomplete Dropdown */
        .code-autocomplete-dropdown {
          position: absolute;
          z-index: 1000;
          background: #110d24;
          border: 1.5px solid #7c3aed;
          border-radius: 8px;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.8), 0 0 20px rgba(124, 58, 237, 0.35);
          min-width: 240px;
          max-width: 380px;
          max-height: 230px;
          overflow-y: auto;
          overflow-x: hidden;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          animation: acFadeIn 0.12s ease-out;
        }
        @keyframes acFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ac-item {
          padding: 7px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          cursor: pointer;
          color: #e2e8f0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: background 0.1s ease;
        }
        .ac-item:last-child {
          border-bottom: none;
        }
        .ac-item:hover, .ac-item.active {
          background: linear-gradient(135deg, #7c3aed, #9333ea);
          color: #ffffff;
        }
        .ac-item-left {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .ac-item-badge {
          font-size: 9.5px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          flex-shrink: 0;
        }
        .badge-class {
          background: rgba(168, 85, 247, 0.25);
          color: #e9d5ff;
          border: 1px solid rgba(168, 85, 247, 0.5);
        }
        .badge-new {
          background: rgba(6, 182, 212, 0.25);
          color: #a5f3fc;
          border: 1px solid rgba(6, 182, 212, 0.5);
        }
        .badge-snippet {
          background: rgba(16, 185, 129, 0.25);
          color: #a7f3d0;
          border: 1px solid rgba(16, 185, 129, 0.5);
        }
        .badge-kw {
          background: rgba(245, 158, 11, 0.25);
          color: #fde68a;
          border: 1px solid rgba(245, 158, 11, 0.5);
        }
        .badge-field {
          background: rgba(236, 72, 153, 0.25);
          color: #fbcfe8;
          border: 1px solid rgba(236, 72, 153, 0.5);
        }
        .ac-item-name {
          font-weight: 600;
          color: #ffffff;
        }
        .ac-item-hint {
          font-size: 10.5px;
          color: #94a3b8;
          white-space: nowrap;
        }
        .ac-item.active .ac-item-hint {
          color: #f1f5f9;
        }
      `;
      document.head.appendChild(style);
    },

    bindEvents() {
      if (!this.codeArea) return;

      // 1. Keydown: Smart Indent, Tab, Backspace, Brackets, Navigation
      this.codeArea.addEventListener("keydown", (e) => this.handleKeyDown(e));

      // 2. Input: Autocomplete triggers & Live class scanning
      this.codeArea.addEventListener("input", () => {
        this.scanCodeForClasses();
        this.triggerAutocomplete();
        this.renderChipsBar();
      });

      // 3. Click / Focus / Blur
      this.codeArea.addEventListener("click", () => {
        setTimeout(() => this.triggerAutocomplete(), 30);
      });

      document.addEventListener("click", (e) => {
        if (!e.target.closest(".editor-wrapper")) {
          this.closeDropdown();
        }
      });
    },

    handleKeyDown(e) {
      // If Autocomplete Dropdown is Open
      if (this.isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          this.selectedIndex = (this.selectedIndex + 1) % this.suggestions.length;
          this.updateDropdownActive();
          return;
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          this.selectedIndex = (this.selectedIndex - 1 + this.suggestions.length) % this.suggestions.length;
          this.updateDropdownActive();
          return;
        }
        if (e.key === "Enter" || e.key === "Tab") {
          e.preventDefault();
          this.applySelectedSuggestion();
          return;
        }
        if (e.key === "Escape") {
          e.preventDefault();
          this.closeDropdown();
          return;
        }
      }

      // 1. SMART ENTER INDENTATION
      if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
        this.handleSmartEnter(e);
        return;
      }

      // 2. SMART TAB & SHIFT+TAB
      if (e.key === "Tab") {
        e.preventDefault();
        this.handleTab(e.shiftKey);
        return;
      }

      // 3. SMART BACKSPACE (deletes 4 spaces at once on indentation)
      if (e.key === "Backspace") {
        this.handleSmartBackspace(e);
        return;
      }

      // 4. AUTO-CLOSING PAIRS & AUTO-SKIP
      this.handleAutoPairs(e);

      // 5. Ctrl+Space: Force Autocomplete Trigger
      if ((e.ctrlKey || e.metaKey) && (e.code === "Space" || e.key === " ")) {
        e.preventDefault();
        this.triggerAutocomplete(true);
      }
    },

    handleSmartEnter(e) {
      e.preventDefault();
      const textarea = this.codeArea;
      const val = textarea.value;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      // Extract current line text before cursor
      const lineStart = val.lastIndexOf("\n", start - 1) + 1;
      const lineBefore = val.substring(lineStart, start);
      const indentMatch = lineBefore.match(/^[ \t]*/);
      const baseIndent = indentMatch ? indentMatch[0] : "";
      const trimmedBefore = lineBefore.trim();

      const charAfter = val.charAt(start);

      // Case A: Cursor is between opening and closing braces: '{|}'
      if ((trimmedBefore.endsWith("{") || lineBefore.endsWith("{")) && charAfter === "}") {
        const extraIndent = "    ";
        const insertText = "\n" + baseIndent + extraIndent + "\n" + baseIndent;
        this.insertTextAtCursor(insertText, start, end);
        const newCursorPos = start + 1 + baseIndent.length + extraIndent.length;
        textarea.selectionStart = textarea.selectionEnd = newCursorPos;
        this.triggerInputEvent();
        return;
      }

      // Case B: Line ends with an opening brace '{' or '(' or '['
      if (/[\{\(\[]$/.test(trimmedBefore)) {
        const extraIndent = "    ";
        const insertText = "\n" + baseIndent + extraIndent;
        this.insertTextAtCursor(insertText, start, end);
        const newCursorPos = start + insertText.length;
        textarea.selectionStart = textarea.selectionEnd = newCursorPos;
        this.triggerInputEvent();
        return;
      }

      // Case C: Standard Line — Preserve Current Indentation Level
      let nextIndent = baseIndent;
      // If the character right after cursor is closing '}', unindent if already indented
      if (charAfter === "}" && nextIndent.length >= 4) {
        nextIndent = nextIndent.slice(4);
      }

      const insertText = "\n" + nextIndent;
      this.insertTextAtCursor(insertText, start, end);
      const newCursorPos = start + insertText.length;
      textarea.selectionStart = textarea.selectionEnd = newCursorPos;
      this.triggerInputEvent();
    },

    handleTab(isShift) {
      const textarea = this.codeArea;
      const val = textarea.value;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      if (start === end) {
        // Single cursor: insert 4 spaces
        this.insertTextAtCursor("    ", start, end);
        textarea.selectionStart = textarea.selectionEnd = start + 4;
      } else {
        // Multi-line block indentation
        const lineStart = val.lastIndexOf("\n", start - 1) + 1;
        const lineEnd = val.indexOf("\n", end);
        const endOfBlock = lineEnd === -1 ? val.length : lineEnd;
        const selectedBlock = val.substring(lineStart, endOfBlock);
        const lines = selectedBlock.split("\n");

        let modifiedLines;
        if (!isShift) {
          modifiedLines = lines.map(line => "    " + line);
        } else {
          modifiedLines = lines.map(line => line.startsWith("    ") ? line.slice(4) : line.replace(/^[ \t]{1,3}/, ""));
        }

        const newText = modifiedLines.join("\n");
        textarea.value = val.substring(0, lineStart) + newText + val.substring(endOfBlock);
        textarea.selectionStart = lineStart;
        textarea.selectionEnd = lineStart + newText.length;
      }
      this.triggerInputEvent();
    },

    handleSmartBackspace(e) {
      const textarea = this.codeArea;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      if (start !== end) return;

      const val = textarea.value;
      const lineStart = val.lastIndexOf("\n", start - 1) + 1;
      const lineBefore = val.substring(lineStart, start);

      // If text before cursor consists solely of spaces and ends with a 4-space block
      if (/^[ ]+$/.test(lineBefore) && lineBefore.length % 4 === 0 && lineBefore.length >= 4) {
        e.preventDefault();
        textarea.value = val.substring(0, start - 4) + val.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start - 4;
        this.triggerInputEvent();
      }
    },

    handleAutoPairs(e) {
      const textarea = this.codeArea;
      const val = textarea.value;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const charAfter = val.charAt(start);

      // 1. Skip past closing bracket if user types it and it already exists
      if ((e.key === "}" && charAfter === "}") ||
          (e.key === ")" && charAfter === ")") ||
          (e.key === "]" && charAfter === "]") ||
          (e.key === "\"" && charAfter === "\"") ||
          (e.key === ";" && charAfter === ";")) {
        e.preventDefault();
        textarea.selectionStart = textarea.selectionEnd = start + 1;
        return;
      }

      // 2. Auto-close curly brace '{' -> '{ }'
      if (e.key === "{" && start === end) {
        e.preventDefault();
        this.insertTextAtCursor("{}", start, end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
        this.triggerInputEvent();
        return;
      }

      // 3. Auto-close round parenthesis '(' -> '()'
      if (e.key === "(" && start === end) {
        e.preventDefault();
        this.insertTextAtCursor("()", start, end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
        this.triggerInputEvent();
        return;
      }

      // 4. Auto-close square bracket '[' -> '[]'
      if (e.key === "[" && start === end) {
        e.preventDefault();
        this.insertTextAtCursor("[]", start, end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
        this.triggerInputEvent();
        return;
      }

      // 5. Auto-close double quote '"' -> '""'
      if (e.key === "\"" && start === end) {
        e.preventDefault();
        this.insertTextAtCursor("\"\"", start, end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
        this.triggerInputEvent();
      }
    },

    insertTextAtCursor(text, start, end) {
      const textarea = this.codeArea;
      if (typeof document.execCommand === "function") {
        textarea.focus();
        textarea.setSelectionRange(start, end);
        const success = document.execCommand("insertText", false, text);
        if (success) return;
      }
      const val = textarea.value;
      textarea.value = val.substring(0, start) + text + val.substring(end);
    },

    triggerInputEvent() {
      const evt = new Event("input", { bubbles: true });
      this.codeArea.dispatchEvent(evt);
    },

    // --------------------------------------------------------------------------
    // CLASS SCANNING & AUTOCOMPLETE ENGINE
    // --------------------------------------------------------------------------

    scanCodeForClasses() {
      if (!this.codeArea) return;
      const code = this.codeArea.value || "";
      this.knownClasses = new Set(["Main"]);

      // 1. Add classes required by current challenge
      if (this.currentChallenge && this.currentChallenge.requirements && this.currentChallenge.requirements.classes) {
        this.currentChallenge.requirements.classes.forEach(c => {
          if (c && typeof c === "string") this.knownClasses.add(c.trim());
        });
      }

      // 2. Scan code for user-defined classes / interfaces / records
      const regex = /(?:class|interface|record|enum)\s+([A-Za-z0-9_]+)/g;
      let match;
      while ((match = regex.exec(code)) !== null) {
        if (match[1]) {
          this.knownClasses.add(match[1]);
        }
      }
    },

    triggerAutocomplete(forceOpen = false) {
      if (!this.codeArea || !this.dropdownEl) return;
      const pos = this.codeArea.selectionStart;
      const val = this.codeArea.value;

      // Extract preceding text on current line up to cursor
      const lineStart = val.lastIndexOf("\n", pos - 1) + 1;
      const lineText = val.substring(lineStart, pos);

      // Determine current word being typed
      const wordMatch = lineText.match(/([A-Za-z0-9_]+)$/);
      const currentWord = wordMatch ? wordMatch[1] : "";
      this.currentFilterWord = currentWord;
      this.wordStartIndex = pos - currentWord.length;

      // Check context
      const trimmedLine = lineText.trim();
      const isAfterClassKeyword = /class\s+$/i.test(lineText) || /class\s+([A-Za-z0-9_]*)$/i.test(lineText);
      const isAfterNewKeyword = /new\s+$/i.test(lineText) || /new\s+([A-Za-z0-9_]*)$/i.test(lineText);

      if (!forceOpen && currentWord.length === 0 && !isAfterClassKeyword && !isAfterNewKeyword) {
        this.closeDropdown();
        return;
      }

      // Build suggestions list
      const list = this.buildSuggestions(currentWord, isAfterClassKeyword, isAfterNewKeyword);

      if (list.length === 0) {
        this.closeDropdown();
        return;
      }

      this.suggestions = list;
      this.selectedIndex = 0;
      this.renderDropdown();
      this.positionDropdown(pos);
    },

    buildSuggestions(filterWord, isAfterClass, isAfterNew) {
      const q = filterWord.toLowerCase();
      const results = [];
      const classesList = Array.from(this.knownClasses).filter(c => c !== "Main");

      // Context 1: User just typed 'class ' -> Give class name suggestions and templates
      if (isAfterClass) {
        classesList.forEach(cls => {
          if (!q || cls.toLowerCase().startsWith(q)) {
            results.push({
              name: cls,
              type: "class",
              badge: "Class",
              insertText: cls + " {\n    \n}",
              cursorOffset: cls.length + 7, // inside class body with indent
              hint: "Class blueprint"
            });
          }
        });
        return results;
      }

      // Context 2: User just typed 'new ' -> Give object instantiation suggestions
      if (isAfterNew) {
        classesList.forEach(cls => {
          if (!q || cls.toLowerCase().startsWith(q)) {
            results.push({
              name: cls + "()",
              type: "new",
              badge: "New",
              insertText: cls + "();",
              cursorOffset: cls.length + 3,
              hint: "New instance"
            });
          }
        });
        return results;
      }

      // Context 3: General Java code context (e.g. typing class name, new, sout, types)

      // A. Classes Defined in Code / Requirements (HIGHEST PRIORITY)
      classesList.forEach(cls => {
        if (!q || cls.toLowerCase().includes(q)) {
          // 1. Pure class name
          results.push({
            name: cls,
            type: "class",
            badge: "Class",
            insertText: cls,
            cursorOffset: cls.length,
            hint: "Custom Class"
          });

          // 2. Class instantiation statement: e.g. "Customer cust = new Customer();"
          const varName = cls.charAt(0).toLowerCase() + cls.slice(1);
          results.push({
            name: `${cls} ${varName} = new ${cls}();`,
            type: "new",
            badge: "Instance",
            insertText: `${cls} ${varName} = new ${cls}();`,
            cursorOffset: `${cls} ${varName} = new ${cls}();`.length,
            hint: "Object declaration"
          });
        }
      });

      // B. Required Fields / Methods from challenge
      if (this.currentChallenge && this.currentChallenge.requirements) {
        const reqs = this.currentChallenge.requirements;
        if (reqs.fields) {
          reqs.fields.forEach(f => {
            if (typeof f === "object" && f.name && (!q || f.name.toLowerCase().includes(q))) {
              results.push({
                name: `${f.type} ${f.name};`,
                type: "field",
                badge: "Field",
                insertText: `${f.type} ${f.name};`,
                cursorOffset: `${f.type} ${f.name};`.length,
                hint: `Required ${f.type} field`
              });
            }
          });
        }
        if (reqs.methods) {
          reqs.methods.forEach(m => {
            const mName = typeof m === "string" ? m : m.name;
            if (mName && (!q || mName.toLowerCase().includes(q))) {
              results.push({
                name: `public void ${mName}() { }`,
                type: "snippet",
                badge: "Method",
                insertText: `public void ${mName}() {\n    \n}`,
                cursorOffset: `public void ${mName}() {\n    `.length,
                hint: "Required Method"
              });
            }
          });
        }
      }

      // C. Standard Java Keywords & Snippets
      const COMMON_ITEMS = [
        { name: "class [Name] { }", type: "snippet", badge: "Class", insertText: "class Name {\n    \n}", cursorOffset: 6, hint: "New class declaration" },
        { name: "sout (println)", type: "snippet", badge: "Print", insertText: "System.out.println();", cursorOffset: 19, hint: "Standard output" },
        { name: "public static void main", type: "snippet", badge: "Main", insertText: "public static void main(String[] args) {\n    \n}", cursorOffset: 46, hint: "JVM entry point" },
        { name: "public", type: "kw", badge: "Keyword", insertText: "public ", cursorOffset: 7, hint: "Access modifier" },
        { name: "private", type: "kw", badge: "Keyword", insertText: "private ", cursorOffset: 8, hint: "Access modifier" },
        { name: "protected", type: "kw", badge: "Keyword", insertText: "protected ", cursorOffset: 10, hint: "Access modifier" },
        { name: "static", type: "kw", badge: "Keyword", insertText: "static ", cursorOffset: 7, hint: "Class member" },
        { name: "final", type: "kw", badge: "Keyword", insertText: "final ", cursorOffset: 6, hint: "Constant/immutable" },
        { name: "String", type: "kw", badge: "Type", insertText: "String ", cursorOffset: 7, hint: "Text object" },
        { name: "int", type: "kw", badge: "Type", insertText: "int ", cursorOffset: 4, hint: "32-bit integer" },
        { name: "double", type: "kw", badge: "Type", insertText: "double ", cursorOffset: 7, hint: "64-bit float" },
        { name: "boolean", type: "kw", badge: "Type", insertText: "boolean ", cursorOffset: 8, hint: "true / false" },
        { name: "return", type: "kw", badge: "Keyword", insertText: "return ", cursorOffset: 7, hint: "Return value" },
        { name: "this.", type: "kw", badge: "Keyword", insertText: "this.", cursorOffset: 5, hint: "Current instance" }
      ];

      COMMON_ITEMS.forEach(it => {
        if (!q || it.name.toLowerCase().includes(q) || (q === "sout" && it.name.includes("sout"))) {
          results.push(it);
        }
      });

      return results.slice(0, 8); // Top 8 most relevant suggestions
    },

    renderDropdown() {
      if (!this.dropdownEl) return;
      let html = "";
      this.suggestions.forEach((item, idx) => {
        const badgeClass = item.type === "class" ? "badge-class" :
                           item.type === "new" ? "badge-new" :
                           item.type === "field" ? "badge-field" :
                           item.type === "snippet" ? "badge-snippet" : "badge-kw";

        html += `
          <div class="ac-item ${idx === this.selectedIndex ? "active" : ""}" data-idx="${idx}">
            <div class="ac-item-left">
              <span class="ac-item-badge ${badgeClass}">${item.badge}</span>
              <span class="ac-item-name">${this.escapeHTML(item.name)}</span>
            </div>
            <span class="ac-item-hint">${this.escapeHTML(item.hint || "")}</span>
          </div>
        `;
      });

      this.dropdownEl.innerHTML = html;
      this.dropdownEl.style.display = "block";
      this.isOpen = true;

      // Bind click handlers to items
      this.dropdownEl.querySelectorAll(".ac-item").forEach(el => {
        el.addEventListener("mousedown", (e) => {
          e.preventDefault(); // prevent blur
          const idx = parseInt(el.dataset.idx, 10);
          if (!isNaN(idx)) {
            this.selectedIndex = idx;
            this.applySelectedSuggestion();
          }
        });
      });
    },

    updateDropdownActive() {
      if (!this.dropdownEl) return;
      const items = this.dropdownEl.querySelectorAll(".ac-item");
      items.forEach((it, idx) => {
        it.classList.toggle("active", idx === this.selectedIndex);
        if (idx === this.selectedIndex) {
          it.scrollIntoView({ block: "nearest" });
        }
      });
    },

    positionDropdown(cursorPos) {
      if (!this.codeArea || !this.dropdownEl) return;
      const coords = this.getCaretCoordinates(this.codeArea, cursorPos);
      const wrapper = this.codeArea.closest(".editor-wrapper");
      const wrapperRect = wrapper ? wrapper.getBoundingClientRect() : { top: 0, left: 0, width: 600, height: 400 };

      // Relative to wrapper
      let top = coords.top - wrapperRect.top + 6;
      let left = coords.left - wrapperRect.left;

      // Keep within bounds
      if (left < 10) left = 10;
      if (left + 280 > wrapperRect.width) left = Math.max(10, wrapperRect.width - 290);
      if (top + 230 > wrapperRect.height) top = Math.max(10, top - 245); // flip above if overflowing

      this.dropdownEl.style.top = top + "px";
      this.dropdownEl.style.left = left + "px";
    },

    applySelectedSuggestion() {
      const item = this.suggestions[this.selectedIndex];
      if (!item || !this.codeArea) return;

      const textarea = this.codeArea;
      const val = textarea.value;
      const start = this.wordStartIndex;
      const end = textarea.selectionEnd;

      // Replace from wordStartIndex to current cursor end
      const insertStr = item.insertText;
      textarea.value = val.substring(0, start) + insertStr + val.substring(end);

      const targetPos = start + (item.cursorOffset !== undefined ? item.cursorOffset : insertStr.length);
      textarea.selectionStart = textarea.selectionEnd = targetPos;

      this.closeDropdown();
      this.scanCodeForClasses();
      this.renderChipsBar();
      this.triggerInputEvent();
      textarea.focus();
    },

    closeDropdown() {
      if (this.dropdownEl) {
        this.dropdownEl.style.display = "none";
      }
      this.isOpen = false;
      this.suggestions = [];
    },

    // --------------------------------------------------------------------------
    // SMART SUGGESTION CHIPS BAR (DESKTOP & MOBILE ONE-CLICK TOKENS)
    // --------------------------------------------------------------------------

    renderChipsBar() {
      if (!this.chipsBarEl) return;
      const isEn = (global.OOP_I18N && typeof global.OOP_I18N.getLang === "function")
        ? global.OOP_I18N.getLang() === "en"
        : (typeof localStorage !== "undefined" && localStorage.getItem("OOP_LANG") === "en");
      const classesList = Array.from(this.knownClasses).filter(c => c !== "Main");
      let html = `<span class="chip-label-prefix">${isEn ? "⚡ Variants:" : "⚡ Variantlar:"}</span>`;

      // 1. Challenge / Discovered Class Chips
      if (classesList.length > 0) {
        classesList.forEach(cls => {
          html += `
            <button type="button" class="smart-chip-btn chip-class" data-action="insert" data-text="${cls}" title="${isEn ? "Insert class name" : "Klass nomini qo'yish"}">
              <span>🏷️</span> ${cls}
            </button>
            <button type="button" class="smart-chip-btn chip-new" data-action="insert" data-text="new ${cls}();" title="${isEn ? "Instantiate object" : "Obyekt yaratish kodi"}">
              <span>⚡</span> new ${cls}()
            </button>
            <button type="button" class="smart-chip-btn chip-template" data-action="class-template" data-cls="${cls}" title="${isEn ? "Insert full class blueprint" : "To'liq klass shablonini kiritish"}">
              <span>📦</span> class ${cls} { }
            </button>
          `;
        });
      } else {
        html += `
          <button type="button" class="smart-chip-btn chip-template" data-action="generic-class" title="${isEn ? "New class template" : "Yangi klass shabloni"}">
            <span>📦</span> class Model { }
          </button>
        `;
      }

      // 2. sout & common getters/setters
      html += `
        <button type="button" class="smart-chip-btn" data-action="insert" data-text="System.out.println();" data-offset="19" title="Chiqarish buyrug'i">
          <span>🖨️</span> sout
        </button>
        <button type="button" class="smart-chip-btn" data-action="insert" data-text="private " title="private modifikatori">
          private
        </button>
        <button type="button" class="smart-chip-btn" data-action="insert" data-text="public " title="public modifikatori">
          public
        </button>
      `;

      this.chipsBarEl.innerHTML = html;

      // Bind Chip click handlers
      this.chipsBarEl.querySelectorAll(".smart-chip-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          const action = btn.dataset.action;
          const textarea = this.codeArea;
          if (!textarea) return;

          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          const val = textarea.value;

          if (action === "insert") {
            const insText = btn.dataset.text || "";
            const offset = btn.dataset.offset ? parseInt(btn.dataset.offset, 10) : insText.length;
            textarea.value = val.substring(0, start) + insText + val.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + offset;
          } else if (action === "class-template") {
            const cls = btn.dataset.cls || "Model";
            const template = `class ${cls} {\n    \n}\n`;
            textarea.value = val.substring(0, start) + template + val.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + cls.length + 12; // inside class body
          } else if (action === "generic-class") {
            const template = `class Model {\n    \n}\n`;
            textarea.value = val.substring(0, start) + template + val.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + 18;
          }

          textarea.focus();
          this.scanCodeForClasses();
          this.renderChipsBar();
          this.triggerInputEvent();
        });
      });
    },

    // --------------------------------------------------------------------------
    // CARET COORDINATES MIRROR HELPER
    // --------------------------------------------------------------------------

    getCaretCoordinates(textarea, position) {
      let mirror = document.getElementById("textareaCaretMirror");
      if (!mirror) {
        mirror = document.createElement("div");
        mirror.id = "textareaCaretMirror";
        document.body.appendChild(mirror);
      }

      const style = window.getComputedStyle(textarea);
      mirror.style.position = "absolute";
      mirror.style.top = "-9999px";
      mirror.style.left = "-9999px";
      mirror.style.visibility = "hidden";
      mirror.style.whiteSpace = "pre-wrap";
      mirror.style.wordWrap = "break-word";
      mirror.style.width = textarea.clientWidth + "px";
      mirror.style.fontFamily = style.fontFamily;
      mirror.style.fontSize = style.fontSize;
      mirror.style.lineHeight = style.lineHeight;
      mirror.style.padding = style.padding;
      mirror.style.border = style.border;
      mirror.style.boxSizing = style.boxSizing;

      const text = textarea.value.substring(0, position);
      mirror.textContent = text;

      const marker = document.createElement("span");
      marker.textContent = "|";
      mirror.appendChild(marker);

      const rect = textarea.getBoundingClientRect();
      const markerOffsetLeft = marker.offsetLeft;
      const markerOffsetTop = marker.offsetTop - textarea.scrollTop;

      return {
        top: rect.top + markerOffsetTop + 22,
        left: rect.left + markerOffsetLeft
      };
    },

    escapeHTML(str) {
      if (!str) return "";
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }
  };

  global.JavaEditorEnhancer = JavaEditorEnhancer;

  // Auto-bootstrap on DOMContentLoaded if textarea#codeEditor is present
  if (typeof document !== "undefined") {
    const bootstrap = () => {
      const area = document.getElementById("codeEditor");
      if (area && !JavaEditorEnhancer.codeArea) {
        JavaEditorEnhancer.init("codeEditor");
      }
    };
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", bootstrap);
    } else {
      bootstrap();
    }
  }

  // Hook into language change for bilingual chips bar updates
  const origOnLang = global.onOopLanguageChange;
  global.onOopLanguageChange = function (lang) {
    if (typeof origOnLang === "function") {
      try { origOnLang(lang); } catch (e) {}
    }
    if (JavaEditorEnhancer && typeof JavaEditorEnhancer.renderChipsBar === "function") {
      JavaEditorEnhancer.renderChipsBar();
    }
  };
})(typeof window !== "undefined" ? window : global);
