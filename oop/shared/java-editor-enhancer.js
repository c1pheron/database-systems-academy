// ============================================================================
// OOP ACADEMY — SMART JAVA EDITOR & SYNTAX HIGHLIGHTER (PROFESSOR ADA)
// 1. IntelliJ IDEA Darcula Syntax Highlighting Engine (Keywords, Types, Classes, Strings, Numbers)
// 2. Glowing Red Error Detector with Wavy Underlines (Detects 'class Name(', typos, unclosed quotes, etc.)
// 3. Synchronized Line Numbers Gutter with Error Dots
// 4. Intelligent Auto-Indentation on Enter (4 spaces inside classes & methods)
// 5. Bracket Splitting & Expansion ({|} -> creates 4-space indented block)
// 6. Dynamic Class Autocomplete & IntelliSense Variants
// 7. Smart Suggestion Chips Bar (One-click tokens for classes, new, sout)
// ============================================================================

(function (global) {
  "use strict";

  const KEYWORDS = new Set([
    "abstract", "assert", "break", "case", "catch", "class", "const",
    "continue", "default", "do", "else", "enum", "extends", "final",
    "finally", "for", "goto", "if", "implements", "import", "instanceof",
    "interface", "native", "new", "package", "private", "protected",
    "public", "record", "return", "sealed", "static", "strictfp",
    "super", "switch", "synchronized", "this", "throw", "throws",
    "transient", "try", "var", "void", "volatile", "while", "yield"
  ]);

  const TYPES = new Set([
    "boolean", "byte", "char", "double", "float", "int", "long", "short", "void",
    "String", "Integer", "Double", "Boolean", "Character", "Long", "Float", "Byte", "Short",
    "Object", "Class", "System", "Scanner", "Math", "List", "ArrayList", "Map", "HashMap", "Set", "HashSet",
    "Arrays", "Collections", "StringBuilder", "StringBuffer", "Exception", "Throwable"
  ]);

  const TYPO_KEYWORDS = {
    "pubic": "public",
    "plublic": "public",
    "pbulic": "public",
    "clas": "class",
    "clss": "class",
    "sattic": "static",
    "staitc": "static",
    "viod": "void",
    "privte": "private",
    "pravite": "private",
    "retun": "return",
    "reutrn": "return",
    "prntln": "println",
    "sytem": "System"
  };

  const JavaEditorEnhancer = {
    codeArea: null,
    surfaceEl: null,
    gutterEl: null,
    backdropEl: null,
    codeContentEl: null,
    dropdownEl: null,
    chipsBarEl: null,
    errorBadgeEl: null,
    currentChallenge: null,
    knownClasses: new Set(["Main"]),
    knownFields: new Map(),
    knownMethods: new Map(),
    suggestions: [],
    selectedIndex: 0,
    isOpen: false,
    currentFilterWord: "",
    wordStartIndex: 0,

    init(textareaId, challenge) {
      this.codeArea = document.getElementById(textareaId);
      if (!this.codeArea) return;

      this.currentChallenge = challenge || null;
      this.injectStyles();
      this.setupHighlighterSurface();
      this.createUIElements();
      this.bindEvents();
      this.scanCodeForClasses();
      this.renderChipsBar();
      this.updateHighlighting();
    },

    setChallenge(ch) {
      if (!this.codeArea) {
        this.init("codeEditor", ch);
        return;
      }
      this.currentChallenge = ch;
      this.scanCodeForClasses();
      this.renderChipsBar();
      this.updateHighlighting();
    },

    // --------------------------------------------------------------------------
    // DUAL-LAYER HIGHLIGHTER SURFACE SETUP
    // --------------------------------------------------------------------------

    setupHighlighterSurface() {
      this.surfaceEl = document.getElementById("codeEditorSurface");
      this.gutterEl = document.getElementById("editorGutter");
      this.backdropEl = document.getElementById("codeHighlightBackdrop");
      this.codeContentEl = document.getElementById("codeHighlightContent");

      if (!this.surfaceEl || !this.gutterEl || !this.backdropEl || !this.codeContentEl) {
        if (!this.codeArea) return;
        const parent = this.codeArea.parentElement;
        if (!parent) return;

        if (parent.id === "codeViewport") {
          this.surfaceEl = document.getElementById("codeEditorSurface");
          this.gutterEl = document.getElementById("editorGutter");
          this.backdropEl = document.getElementById("codeHighlightBackdrop");
          this.codeContentEl = document.getElementById("codeHighlightContent");
        } else {
          // Fallback container surface
          const surface = document.createElement("div");
          surface.className = "code-editor-surface";
          surface.id = "codeEditorSurface";

          // Line numbers gutter
          const gutter = document.createElement("div");
          gutter.className = "editor-gutter";
          gutter.id = "editorGutter";
          gutter.setAttribute("aria-hidden", "true");

          // Viewport wrapper
          const viewport = document.createElement("div");
          viewport.className = "code-viewport";
          viewport.id = "codeViewport";

          // Highlight backdrop
          const backdrop = document.createElement("pre");
          backdrop.className = "code-highlight-backdrop";
          backdrop.id = "codeHighlightBackdrop";
          backdrop.setAttribute("aria-hidden", "true");

          const codeContent = document.createElement("code");
          codeContent.id = "codeHighlightContent";
          backdrop.appendChild(codeContent);

          // Re-parent textarea
          parent.insertBefore(surface, this.codeArea);
          surface.appendChild(gutter);
          surface.appendChild(viewport);
          viewport.appendChild(backdrop);
          viewport.appendChild(this.codeArea);

          this.surfaceEl = surface;
          this.gutterEl = gutter;
          this.backdropEl = backdrop;
          this.codeContentEl = codeContent;
        }
      }

      // Toolbar badges removed as per user preference (clean, minimal header)

      // Scroll synchronization
      if (this.codeArea) {
        if (!this._hasScrollHandler) {
          this.codeArea.addEventListener("scroll", () => this.syncScroll(), { passive: true });
          this._hasScrollHandler = true;
        }
      }
    },

    syncScroll() {
      if (!this.codeArea) return;
      if (this.backdropEl) {
        this.backdropEl.scrollTop = this.codeArea.scrollTop;
        this.backdropEl.scrollLeft = this.codeArea.scrollLeft;
      }
      if (this.gutterEl) {
        this.gutterEl.scrollTop = this.codeArea.scrollTop;
      }
    },

    createUIElements() {
      const wrapper = this.codeArea.closest(".editor-wrapper");
      if (wrapper && !document.getElementById("smartSuggestionChipsBar")) {
        const chipsBar = document.createElement("div");
        chipsBar.id = "smartSuggestionChipsBar";
        chipsBar.className = "smart-suggestion-chips-bar";

        const quickKeys = wrapper.querySelector(".editor-quick-keys");
        if (quickKeys) {
          quickKeys.insertAdjacentElement("afterend", chipsBar);
        } else if (this.surfaceEl) {
          wrapper.insertBefore(chipsBar, this.surfaceEl);
        } else {
          wrapper.insertBefore(chipsBar, this.codeArea);
        }
        this.chipsBarEl = chipsBar;
      } else {
        this.chipsBarEl = document.getElementById("smartSuggestionChipsBar");
      }

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
    },

    injectStyles() {
      if (document.getElementById("javaEditorEnhancerStyles")) return;
      const style = document.createElement("style");
      style.id = "javaEditorEnhancerStyles";
      style.textContent = `
        /* Dual-layer IntelliJ Code Editor Surface */
        .code-editor-surface {
          position: relative;
          display: flex;
          width: 100%;
          height: 100%;
          min-height: 60px;
          background: #0d0a1f;
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 0 0 8px 8px;
          overflow: hidden;
          box-sizing: border-box;
        }

        .editor-gutter {
          width: 42px;
          background: #090717;
          border-right: 1px solid rgba(168, 85, 247, 0.2);
          padding: 16px 8px 16px 0;
          text-align: right;
          font-family: Consolas, 'Courier New', monospace;
          font-size: 13px;
          line-height: 22px;
          color: #64748b;
          user-select: none;
          overflow: hidden;
          box-sizing: border-box;
          flex-shrink: 0;
        }

        .gutter-line {
          height: 22px;
          line-height: 22px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 4px;
          font-family: Consolas, 'Courier New', monospace;
        }
        .gutter-line.has-error {
          color: #ff6b68;
          font-weight: 700;
        }
        .gutter-err-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ff6b68;
          box-shadow: 0 0 6px rgba(255, 107, 104, 0.9);
          display: inline-block;
        }

        .code-viewport {
          position: relative;
          flex: 1;
          height: 100%;
          min-height: 60px;
          overflow: hidden;
          background: #0d0a1f;
        }

        /* CRITICAL METRICS LOCK: Identical width/height across textarea and highlight backdrop */
        .code-highlight-backdrop,
        .code-highlight-backdrop *,
        #codeHighlightContent,
        #codeHighlightContent *,
        .code-editor-surface .code-textarea,
        .code-textarea {
          font-family: Consolas, 'Courier New', monospace !important;
          font-size: 13.5px !important;
          line-height: 22px !important;
          letter-spacing: 0px !important;
          word-spacing: 0px !important;
          font-weight: 500 !important;
          font-style: normal !important;
          font-variant-ligatures: none !important;
          font-feature-settings: "liga" 0, "calt" 0 !important;
          text-rendering: optimizeLegibility !important;
          -webkit-font-smoothing: antialiased !important;
          -moz-osx-font-smoothing: grayscale !important;
          tab-size: 4 !important;
          -moz-tab-size: 4 !important;
          white-space: pre !important;
          word-wrap: normal !important;
          overflow-wrap: normal !important;
          word-break: normal !important;
          text-align: left !important;
          text-indent: 0 !important;
          text-transform: none !important;
          direction: ltr !important;
        }

        .code-highlight-backdrop,
        .code-editor-surface .code-textarea,
        .code-textarea {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          padding: 16px !important;
          margin: 0 !important;
          border: none !important;
          box-sizing: border-box !important;
          overflow: auto !important;
        }

        .code-highlight-backdrop code,
        #codeHighlightContent {
          display: inline-block !important;
          min-width: 100% !important;
          padding: 0 !important;
          margin: 0 !important;
          border: none !important;
          background: transparent !important;
          color: inherit !important;
        }

        .code-highlight-backdrop {
          pointer-events: none !important;
          z-index: 1 !important;
          color: #abb2bf !important;
          background: transparent !important;
        }

        .code-textarea {
          z-index: 2 !important;
          background: transparent !important;
          color: transparent !important;
          -webkit-text-fill-color: transparent !important;
          caret-color: #38bdf8 !important;
          resize: none !important;
          outline: none !important;
        }

        .code-textarea::placeholder {
          color: #64748b !important;
          -webkit-text-fill-color: #64748b !important;
          font-style: italic !important;
        }

        .code-textarea::selection {
          background: rgba(124, 58, 237, 0.45) !important;
          color: transparent !important;
          -webkit-text-fill-color: transparent !important;
        }

        /* IntelliJ IDEA Darcula Token Colors */
        .tok-keyword { color: #cf8e6d !important; font-weight: 700 !important; }
        .tok-type { color: #cf8e6d !important; font-weight: 600 !important; }
        .tok-class { color: #bcbec4 !important; font-weight: 600 !important; }
        .tok-method { color: #56a8f5 !important; font-weight: 500 !important; }
        .tok-string { color: #6aab73 !important; }
        .tok-char { color: #6aab73 !important; }
        .tok-number { color: #2aacb8 !important; }
        .tok-comment { color: #7a7e85 !important; font-style: italic !important; }
        .tok-annotation { color: #bbb529 !important; }
        .tok-operator { color: #e2e8f0 !important; }
        .tok-bracket { color: #cbd5e1 !important; }
        .tok-ident { color: #bcbec4 !important; }

        /* Error token styling - glowing red & wavy underline */
        .tok-error {
          color: #ff4d4f !important;
          -webkit-text-fill-color: #ff4d4f !important;
          background: rgba(239, 68, 68, 0.28) !important;
          border-bottom: 2px wavy #ef4444 !important;
          border-radius: 2px !important;
          padding: 0 !important;
          margin: 0 !important;
          font-weight: 700 !important;
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.6) !important;
        }

        /* Smart Suggestion Chips Bar */
        .smart-suggestion-chips-bar {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 2px 10px;
          background: #0d0a1c;
          border-bottom: 1px solid rgba(168, 85, 247, 0.2);
          overflow-x: auto;
          white-space: nowrap;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          z-index: 5;
          min-height: 25px;
        }
        .smart-suggestion-chips-bar::-webkit-scrollbar {
          display: none;
        }
        .chip-label-prefix {
          font-size: 9px;
          font-weight: 600;
          color: #9333ea;
          display: inline-flex;
          align-items: center;
          margin-right: 2px;
          flex-shrink: 0;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          user-select: none;
        }
        .smart-chip-btn {
          background: #130f26;
          border: 1px solid rgba(168, 85, 247, 0.22);
          color: #c4b5fd;
          font-family: Consolas, 'Courier New', monospace;
          font-size: 11px;
          font-weight: 600;
          padding: 2.5px 8px;
          border-radius: 5px;
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.15s ease;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          touch-action: manipulation;
          line-height: 1.3;
          height: 24px;
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
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.45);
          color: #fde68a;
          font-weight: 600;
        }
        .smart-chip-btn.chip-class:hover {
          background: #b45309;
          color: #fff;
        }
        .smart-chip-btn.chip-new {
          background: rgba(6, 182, 212, 0.15);
          border: 1px solid rgba(6, 182, 212, 0.45);
          color: #a5f3fc;
        }
        .smart-chip-btn.chip-new:hover {
          background: #0891b2;
          color: #fff;
        }
        .smart-chip-btn.chip-template {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.45);
          color: #a7f3d0;
        }
        .smart-chip-btn.chip-template:hover {
          background: #059669;
          color: #fff;
        }

                /* Floating Autocomplete Dropdown — Sleek, Translucent (Prazrachni) & Compact */
        .code-autocomplete-dropdown {
          position: absolute !important;
          z-index: 1000 !important;
          background: rgba(13, 10, 31, 0.82) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          border: 1px solid rgba(168, 85, 247, 0.35) !important;
          border-radius: 6px !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.55), 0 0 12px rgba(168, 85, 247, 0.18) !important;
          min-width: 130px !important;
          max-width: 250px !important;
          max-height: 155px !important;
          overflow-y: auto !important;
          overflow-x: hidden !important;
          font-family: Consolas, 'Courier New', monospace !important;
          font-size: 11.5px !important;
          padding: 3px !important;
          scrollbar-width: thin !important;
          scrollbar-color: rgba(168, 85, 247, 0.4) transparent !important;
          animation: acFadeIn 0.1s ease-out !important;
        }
        @keyframes acFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ac-item {
          padding: 3.5px 8px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: flex-start !important;
          gap: 7px !important;
          cursor: pointer !important;
          color: #e2e8f0 !important;
          border-radius: 4px !important;
          border-bottom: none !important;
          transition: all 0.1s ease !important;
          height: 24px !important;
          box-sizing: border-box !important;
          white-space: nowrap !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
        }
        .ac-item:hover, .ac-item.active {
          background: rgba(168, 85, 247, 0.4) !important;
          color: #ffffff !important;
        }
        .ac-item-badge {
          font-size: 8.5px !important;
          font-weight: 700 !important;
          padding: 1px 4.5px !important;
          border-radius: 3px !important;
          text-transform: uppercase !important;
          letter-spacing: 0.3px !important;
          flex-shrink: 0 !important;
          font-family: 'Inter', sans-serif !important;
          line-height: 1.1 !important;
        }
        .badge-kw {
          background: rgba(245, 158, 11, 0.25) !important;
          color: #fde68a !important;
          border: 1px solid rgba(245, 158, 11, 0.45) !important;
        }
        .badge-class {
          background: rgba(168, 85, 247, 0.25) !important;
          color: #e9d5ff !important;
          border: 1px solid rgba(168, 85, 247, 0.5) !important;
        }
        .badge-method {
          background: rgba(59, 130, 246, 0.25) !important;
          color: #93c5fd !important;
          border: 1px solid rgba(59, 130, 246, 0.5) !important;
        }
        .badge-field {
          background: rgba(6, 182, 212, 0.25) !important;
          color: #a5f3fc !important;
          border: 1px solid rgba(6, 182, 212, 0.5) !important;
        }
        .badge-snippet {
          background: rgba(16, 185, 129, 0.25) !important;
          color: #a7f3d0 !important;
          border: 1px solid rgba(16, 185, 129, 0.5) !important;
        }
        .ac-item-name {
          font-family: Consolas, 'Courier New', monospace !important;
          font-size: 11.5px !important;
          font-weight: 600 !important;
          color: #f8fafc !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
          white-space: nowrap !important;
        }
      `;
      document.head.appendChild(style);
    },

    bindEvents() {
      if (!this.codeArea) return;

      this.codeArea.addEventListener("keydown", (e) => this.handleKeyDown(e));

      this.codeArea.addEventListener("input", () => {
        this.updateHighlighting();
        this.scanCodeForClasses();
        this.triggerAutocomplete();
        this.renderChipsBar();
      });

      this.codeArea.addEventListener("click", () => {
        setTimeout(() => this.triggerAutocomplete(), 30);
      });

      document.addEventListener("click", (e) => {
        if (!e.target.closest(".editor-wrapper")) {
          this.closeDropdown();
        }
      });
    },

    // --------------------------------------------------------------------------
    // SYNTAX HIGHLIGHTING & ERROR RENDERING
    // --------------------------------------------------------------------------

    updateHighlighting() {
      if (!this.codeArea || !this.codeContentEl) return;
      const code = this.codeArea.value || "";

      let lintErrors = [];
      if (global.JavaAnalyzer && typeof global.JavaAnalyzer.lintSyntax === "function") {
        try {
          const lintRes = global.JavaAnalyzer.lintSyntax(code);
          if (lintRes && Array.isArray(lintRes.errors)) {
            lintErrors = lintRes.errors;
          }
        } catch (e) {}
      }

      const { html, lineCount, errorCount, errorLines } = this.tokenizeJavaCode(code, lintErrors);
      this.codeContentEl.innerHTML = html;
      this.updateGutter(lineCount, errorLines);
      this.updateErrorBadge(errorCount);
      this.syncScroll();
    },

    tokenizeJavaCode(code, lintErrors) {
      const lines = code.split("\n");
      const highlightedLines = [];
      let totalErrors = 0;
      const errorLines = new Set();
      const errorTipsByLine = {};

      if (Array.isArray(lintErrors)) {
        lintErrors.forEach(err => {
          if (err && err.line) {
            errorLines.add(err.line);
            totalErrors++;
            errorTipsByLine[err.line] = err.message || err.tip || "Sintaktik xatolik";
          }
        });
      }

      const tokenRegex = /(\/\/[^\n]*)|("(?:[^"\\]|\\.)*"|"[^"\n]*)|('(?:[^'\\]|\\.)*')|(@[A-Za-z0-9_]+)|(\b\d+(?:\.\d+)?[fFdDlL]?\b)|([a-zA-Z0-9_]+)|([^\s\w])/g;

      for (let i = 0; i < lines.length; i++) {
        const lineNum = i + 1;
        const line = lines[i];
        let lineHtml = "";
        let match;
        let lastIndex = 0;

        tokenRegex.lastIndex = 0;
        while ((match = tokenRegex.exec(line)) !== null) {
          if (match.index > lastIndex) {
            lineHtml += this.escapeHTML(line.substring(lastIndex, match.index));
          }
          lastIndex = tokenRegex.lastIndex;

          const [raw, comment, str, ch, annotation, number, word, punct] = match;

          if (comment) {
            lineHtml += `<span class="tok-comment">${this.escapeHTML(comment)}</span>`;
          } else if (str) {
            if (!str.endsWith('"') || str.length === 1) {
              totalErrors++;
              errorLines.add(lineNum);
              lineHtml += `<span class="tok-error" title="Sintaksis xatosi: Yopilmagan matn satri (qo'shtirnoq yetishmaydi)">${this.escapeHTML(str)}</span>`;
            } else {
              lineHtml += `<span class="tok-string">${this.escapeHTML(str)}</span>`;
            }
          } else if (ch) {
            lineHtml += `<span class="tok-char">${this.escapeHTML(ch)}</span>`;
          } else if (annotation) {
            lineHtml += `<span class="tok-annotation">${this.escapeHTML(annotation)}</span>`;
          } else if (number) {
            lineHtml += `<span class="tok-number">${this.escapeHTML(number)}</span>`;
          } else if (word) {
            if (TYPO_KEYWORDS[word.toLowerCase()]) {
              totalErrors++;
              errorLines.add(lineNum);
              const correct = TYPO_KEYWORDS[word.toLowerCase()];
              lineHtml += `<span class="tok-error" title="Xatolik: '${word}' emas, '${correct}' deb yoziladi!">${this.escapeHTML(word)}</span>`;
            } else if (KEYWORDS.has(word)) {
              lineHtml += `<span class="tok-keyword">${this.escapeHTML(word)}</span>`;
            } else if (TYPES.has(word)) {
              lineHtml += `<span class="tok-type">${this.escapeHTML(word)}</span>`;
            } else if (/^[A-Z][a-zA-Z0-9_]*$/.test(word)) {
              lineHtml += `<span class="tok-class">${this.escapeHTML(word)}</span>`;
            } else {
              const restOfLine = line.substring(tokenRegex.lastIndex);
              if (/^\s*\(/.test(restOfLine)) {
                lineHtml += `<span class="tok-method">${this.escapeHTML(word)}</span>`;
              } else {
                lineHtml += `<span class="tok-ident">${this.escapeHTML(word)}</span>`;
              }
            }
          } else if (punct) {
            // Fatal mistake: 'class Name (' instead of '{'
            const textBefore = line.substring(0, match.index).trim();
            if (punct === "(" && /^class\s+[A-Za-z0-9_]+$/.test(textBefore)) {
              totalErrors++;
              errorLines.add(lineNum);
              lineHtml += `<span class="tok-error" title="Sintaksis xatosi: Klass e'lonida '(' emas, '{' qavs bo'lishi shart!">(</span>`;
            } else {
              lineHtml += `<span class="tok-bracket">${this.escapeHTML(punct)}</span>`;
            }
          }
        }

        if (lastIndex < line.length) {
          lineHtml += this.escapeHTML(line.substring(lastIndex));
        }

        // Check for missing semicolon on field/variable declaration
        const trimmed = line.trim();
        if (/^(?:private|public|protected)?\s*(?:static\s+)?(?:final\s+)?(?:int|double|float|long|short|byte|char|boolean|String|[A-Z][a-zA-Z0-9_]*)\s+[a-zA-Z0-9_]+(?:\s*=\s*[^;,\{\}]+)?$/.test(trimmed)) {
          if (!trimmed.endsWith(";") && !trimmed.endsWith("{")) {
            totalErrors++;
            errorLines.add(lineNum);
            lineHtml += `<span class="tok-error" title="Nuqta-vergul ';' kutilmoqda. Qator oxirida ';' qo'yilishi shart."> ;?</span>`;
          }
        }

        highlightedLines.push(lineHtml);
      }

      let finalHtml = highlightedLines.join("\n");
      // Add trailing space if ending with newline to keep caret heights identical
      if (code.endsWith("\n")) {
        finalHtml += "\n ";
      }

      return {
        html: finalHtml,
        lineCount: lines.length,
        errorCount: totalErrors,
        errorLines: errorLines
      };
    },

    updateGutter(lineCount, errorLines) {
      if (!this.gutterEl) return;
      let gutterHtml = "";
      for (let i = 1; i <= lineCount; i++) {
        const hasErr = errorLines.has(i);
        gutterHtml += `
          <div class="gutter-line ${hasErr ? "has-error" : ""}" title="${hasErr ? "Ushbu qatorda xatolik aniqlandi" : ""}">
            ${hasErr ? '<span class="gutter-err-dot"></span>' : ""}${i}
          </div>
        `;
      }
      this.gutterEl.innerHTML = gutterHtml;
    },

    updateErrorBadge(errorCount) {
      if (!this.errorBadgeEl) {
        this.errorBadgeEl = document.getElementById("editorErrorIndicator");
      }
      if (!this.errorBadgeEl) return;

      if (errorCount > 0) {
        this.errorBadgeEl.style.display = "inline-flex";
        this.errorBadgeEl.textContent = `🔴 ${errorCount} xatolik`;
        this.errorBadgeEl.title = `${errorCount} ta sintaktik xatolik aniqlandi. Qizil bilan belgilangan joylarni tekshiring!`;
      } else {
        this.errorBadgeEl.style.display = "inline-flex";
        this.errorBadgeEl.style.background = "rgba(34, 197, 94, 0.15)";
        this.errorBadgeEl.style.borderColor = "rgba(34, 197, 94, 0.5)";
        this.errorBadgeEl.style.color = "#86efac";
        this.errorBadgeEl.textContent = `🟢 Sintaksis toza`;
        this.errorBadgeEl.title = `Kodda sintaksis xatoliklari aniqlanmadi`;
      }
    },

    // --------------------------------------------------------------------------
    // SMART INDENTATION, ENTER, TAB & BRACKETS
    // --------------------------------------------------------------------------

    handleKeyDown(e) {
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

      if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
        this.handleSmartEnter(e);
        return;
      }

      if (e.key === "Tab") {
        e.preventDefault();
        this.handleTab(e.shiftKey);
        return;
      }

      if (e.key === "Backspace") {
        this.handleSmartBackspace(e);
        return;
      }

      this.handleAutoPairs(e);

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

      const lineStart = val.lastIndexOf("\n", start - 1) + 1;
      const lineBefore = val.substring(lineStart, start);
      const indentMatch = lineBefore.match(/^[ \t]*/);
      const baseIndent = indentMatch ? indentMatch[0] : "";
      const trimmedBefore = lineBefore.trim();
      const charAfter = val.charAt(start);

      // Between braces: '{|}'
      if ((trimmedBefore.endsWith("{") || lineBefore.endsWith("{")) && charAfter === "}") {
        const extraIndent = "    ";
        const insertText = "\n" + baseIndent + extraIndent + "\n" + baseIndent;
        this.insertTextAtCursor(insertText, start, end);
        const newCursorPos = start + 1 + baseIndent.length + extraIndent.length;
        textarea.selectionStart = textarea.selectionEnd = newCursorPos;
        this.triggerInputEvent();
        return;
      }

      // Ends with '{', '(', '['
      if (/[\{\(\[]$/.test(trimmedBefore)) {
        const extraIndent = "    ";
        const insertText = "\n" + baseIndent + extraIndent;
        this.insertTextAtCursor(insertText, start, end);
        const newCursorPos = start + insertText.length;
        textarea.selectionStart = textarea.selectionEnd = newCursorPos;
        this.triggerInputEvent();
        return;
      }

      // Normal line
      let nextIndent = baseIndent;
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

      if (!isShift && start === end) {
        // Expand 'sout' to System.out.println(); on Tab
        const wordMatch = val.substring(0, start).match(/([a-zA-Z0-9_]+)$/);
        if (wordMatch && wordMatch[1] === "sout") {
          const wLen = 4;
          const prefix = val.substring(0, start - wLen);
          const suffix = val.substring(end);
          const replacement = "System.out.println();";
          textarea.value = prefix + replacement + suffix;
          textarea.selectionStart = textarea.selectionEnd = start - wLen + 19;
          this.closeDropdown();
          this.triggerInputEvent();
          this.updateHighlighting();
          return;
        }

        this.insertTextAtCursor("    ", start, end);
        textarea.selectionStart = textarea.selectionEnd = start + 4;
      } else {
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

      if ((e.key === "}" && charAfter === "}") ||
          (e.key === ")" && charAfter === ")") ||
          (e.key === "]" && charAfter === "]") ||
          (e.key === "\"" && charAfter === "\"") ||
          (e.key === ";" && charAfter === ";")) {
        e.preventDefault();
        textarea.selectionStart = textarea.selectionEnd = start + 1;
        return;
      }

      if (e.key === "{" && start === end) {
        e.preventDefault();
        this.insertTextAtCursor("{}", start, end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
        this.triggerInputEvent();
        return;
      }

      if (e.key === "(" && start === end) {
        e.preventDefault();
        this.insertTextAtCursor("()", start, end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
        this.triggerInputEvent();
        return;
      }

      if (e.key === "[" && start === end) {
        e.preventDefault();
        this.insertTextAtCursor("[]", start, end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
        this.triggerInputEvent();
        return;
      }

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
      this.scanCode();
    },

    scanCode() {
      if (!this.codeArea) return;
      const code = this.codeArea.value || "";
      this.knownClasses = new Set(["Main"]);
      this.knownVariables = new Map();
      this.knownFields = new Map();
      this.knownMethods = new Map();

      const addField = (name, type, isPrivate) => {
        if (!name || name === "Main" || KEYWORDS.has(name)) return;
        if (!this.knownFields.has(name)) {
          this.knownFields.set(name, { type: type || "String", isPrivate: !!isPrivate });
        }
      };

      const addMethod = (name, returnType, params, isGetter = false, isSetter = false, targetField = "") => {
        if (!name || KEYWORDS.has(name) || name === "main") return;
        if (!this.knownMethods.has(name)) {
          this.knownMethods.set(name, {
            name,
            returnType: returnType || (name.startsWith("get") ? "String" : "void"),
            params: params || "",
            isGetter,
            isSetter,
            targetField
          });
        }
      };

      const extractFromText = (text) => {
        if (!text) return;
        // classes
        const clsRegex = /(?:class|interface|record|enum)\s+([A-Za-z0-9_]+)/g;
        let m;
        while ((m = clsRegex.exec(text)) !== null) {
          if (m[1]) this.knownClasses.add(m[1]);
        }
        // Extract class types & variable names from declarations: e.g. 'MedicalRecord one =', 'FlightBooking b;'
        const varDeclRegex = /\b([A-Z][a-zA-Z0-9_]*)\s+([a-zA-Z0-9_]+)\s*(?:=|;)/g;
        while ((m = varDeclRegex.exec(text)) !== null) {
          const typeName = m[1];
          const varName = m[2];
          if (typeName && varName && !["String", "Integer", "Double", "Boolean", "Character", "System", "Main"].includes(typeName)) {
            this.knownClasses.add(typeName);
            this.knownVariables.set(varName, typeName);
          }
        }
        // fields: e.g. private String name;
        const fieldRegex = /(?:(private|public|protected)\s+)?(?:static\s+)?(?:final\s+)?([A-Z][a-zA-Z0-9_]*|String|int|double|boolean|char|float|long)\s+([a-zA-Z0-9_]+)\s*(?:=|;)/g;
        while ((m = fieldRegex.exec(text)) !== null) {
          const isPriv = m[1] === "private";
          const fType = m[2];
          const fName = m[3];
          addField(fName, fType, isPriv);
        }
        // methods: e.g. public void setName(String name)
        const methodRegex = /(?:(public|private|protected)\s+)?(?:static\s+)?([A-Z][a-zA-Z0-9_]*|void|int|double|String|boolean)\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)/g;
        while ((m = methodRegex.exec(text)) !== null) {
          const retType = m[2];
          const mName = m[3];
          const params = m[4];
          addMethod(mName, retType, params);
        }
      };

      // 1. Current challenge requirements & fields
      if (this.currentChallenge) {
        const reqs = this.currentChallenge.requirements || {};
        if (Array.isArray(reqs.classes)) {
          reqs.classes.forEach(c => { if (c) this.knownClasses.add(c.trim()); });
        }
        if (Array.isArray(reqs.fields)) {
          reqs.fields.forEach(f => {
            if (typeof f === "object" && f.name) addField(f.name, f.type || "String", false);
            else if (typeof f === "string") addField(f, "String", false);
          });
        }
        if (Array.isArray(reqs.privateFields)) {
          reqs.privateFields.forEach(f => {
            if (typeof f === "object" && f.name) addField(f.name, f.type || "String", true);
            else if (typeof f === "string") addField(f, "String", true);
          });
        }
        if (Array.isArray(reqs.methods)) {
          reqs.methods.forEach(m => {
            const mName = typeof m === "string" ? m : m.name;
            if (mName) addMethod(mName, m.type, m.params);
          });
        }

        // Scan starterCode text
        extractFromText(this.currentChallenge.starterCode);
      }

      // 2. Scan user's active editor code
      extractFromText(code);
    },

    triggerAutocomplete(forceOpen = false) {
      if (!this.codeArea || !this.dropdownEl) return;
      const pos = this.codeArea.selectionStart;
      const val = this.codeArea.value;

      const lineStart = val.lastIndexOf("\n", pos - 1) + 1;
      const lineText = val.substring(lineStart, pos);

      const wordMatch = lineText.match(/([A-Za-z0-9_]+)$/);
      const currentWord = wordMatch ? wordMatch[1] : "";
      this.currentFilterWord = currentWord;
      this.wordStartIndex = pos - currentWord.length;

      const isTypingNew = /\bnew$/i.test(lineText);
      const isAfterNewKeyword = isTypingNew || /\bnew\s+$/i.test(lineText) || /\bnew\s+([A-Za-z0-9_]*)$/i.test(lineText);
      const isAfterClassKeyword = /class\s+$/i.test(lineText) || /class\s+([A-Za-z0-9_]*)$/i.test(lineText);
      const isAfterType = !isAfterNewKeyword && /(?:(?:private|public|protected)\s+)?(?:static\s+)?([A-Z][a-zA-Z0-9_]*|String|int|double|boolean|char|float|long)\s+([A-Za-z0-9_]*)$/i.test(lineText);
      const isAfterDot = /\.\s*([A-Za-z0-9_]*)$/.test(lineText);

      if (!forceOpen && currentWord.length === 0 && !isAfterClassKeyword && !isAfterNewKeyword && !isAfterType && !isAfterDot) {
        this.closeDropdown();
        return;
      }

      const list = this.buildSuggestions(currentWord, lineText, isAfterClassKeyword, isAfterNewKeyword, isAfterType, isAfterDot, isTypingNew, val, pos);

      if (list.length === 0) {
        this.closeDropdown();
        return;
      }

      this.suggestions = list;
      this.selectedIndex = 0;
      this.renderDropdown();
      this.positionDropdown(pos);
    },

    buildSuggestions(filterWord, lineText, isAfterClass, isAfterNew, isAfterType, isAfterDot, isTypingNew = false, fullCode = "", cursorPos = 0) {
      const q = (filterWord || "").toLowerCase();
      const pool = [];

      // 1. After dot (e.g. 'obj.' or 'this.' or 'System.' or 'out.')
      if (isAfterDot) {
        const dotMatch = lineText.match(/([A-Za-z0-9_]+)\.\s*([A-Za-z0-9_]*)$/);
        const objBeforeDot = dotMatch ? dotMatch[1] : "";

        if (objBeforeDot === "System") {
          pool.push({
            name: "out.println()",
            badge: "snip",
            type: "snippet",
            insertText: "out.println();",
            cursorOffset: 12
          });
          pool.push({
            name: "out",
            badge: "var",
            type: "field",
            insertText: "out."
          });
        } else if (objBeforeDot === "out") {
          pool.push({
            name: "println()",
            badge: "fn",
            type: "method",
            insertText: "println();",
            cursorOffset: 8
          });
          pool.push({
            name: "print()",
            badge: "fn",
            type: "method",
            insertText: "print();",
            cursorOffset: 6
          });
          pool.push({
            name: "printf()",
            badge: "fn",
            type: "method",
            insertText: "printf(\"\");",
            cursorOffset: 8
          });
        } else {
          this.knownMethods.forEach(m => {
            pool.push({
              name: `${m.name}()`,
              badge: "fn",
              type: "method",
              insertText: `${m.name}()`,
              cursorOffset: m.name.length + 2
            });
          });
          this.knownFields.forEach((info, fName) => {
            pool.push({
              name: fName,
              badge: "var",
              type: "field",
              insertText: fName,
              cursorOffset: fName.length
            });
          });
        }
      } else if (isAfterNew) {
        // 2. Instantiation (e.g. 'new ', 'new MedicalRecord', or currently typing 'new')
        let preferredClass = null;
        const lhsMatch = lineText.match(/(?:([A-Z][a-zA-Z0-9_]*)\s+)?([a-zA-Z0-9_]+)\s*=\s*(?:new)?/);
        if (lhsMatch) {
          if (lhsMatch[1] && lhsMatch[1] !== "Main") {
            preferredClass = lhsMatch[1];
            this.knownClasses.add(preferredClass);
          } else if (lhsMatch[2] && this.knownVariables && this.knownVariables.has(lhsMatch[2])) {
            preferredClass = this.knownVariables.get(lhsMatch[2]);
          }
        }

        const afterCursor = (fullCode && typeof cursorPos === "number") ? fullCode.substring(cursorPos) : "";
        const hasSemicolon = /^\s*;/.test(afterCursor);
        const hasParen = /^\s*\)/.test(afterCursor);
        const semi = (hasSemicolon || hasParen) ? "" : ";";

        this.knownClasses.forEach(cls => {
          if (cls !== "Main") {
            const isPref = (cls === preferredClass);
            if (isTypingNew) {
              pool.push({
                name: `${cls}()`,
                badge: "cls",
                type: "class",
                insertText: `new ${cls}()${semi}`,
                cursorOffset: 4 + cls.length + 2 + semi.length,
                isPreferred: isPref
              });
            } else {
              pool.push({
                name: `${cls}()`,
                badge: "cls",
                type: "class",
                insertText: `${cls}()${semi}`,
                cursorOffset: cls.length + 2 + semi.length,
                isPreferred: isPref
              });
            }
          }
        });

        if (isTypingNew) {
          pool.push({
            name: "new",
            badge: "kw",
            type: "kw",
            insertText: "new "
          });
        }
      } else if (isAfterType) {
        // 3. Variable/Field Declaration: e.g. 'private String ' or 'String '
        const typeMatch = lineText.match(/(?:(?:private|public|protected)\s+)?(?:static\s+)?([A-Z][a-zA-Z0-9_]*|String|int|double|boolean|char|float|long)\s+([A-Za-z0-9_]*)$/i);
        const declaredType = typeMatch ? typeMatch[1].toLowerCase() : "";

        this.knownFields.forEach((info, fName) => {
          const fType = (info.type || "").toLowerCase();
          if (!declaredType || !fType || fType === declaredType || declaredType === "string") {
            pool.push({
              name: `${fName};`,
              badge: "var",
              type: "field",
              insertText: `${fName};`,
              cursorOffset: fName.length + 1
            });
            pool.push({
              name: fName,
              badge: "var",
              type: "field",
              insertText: fName,
              cursorOffset: fName.length
            });
          }
        });
      } else if (isAfterClass) {
        // 4. Class declaration
        this.knownClasses.forEach(cls => {
          if (cls !== "Main") {
            pool.push({
              name: cls,
              badge: "cls",
              type: "class",
              insertText: `${cls} {\n    \n}`,
              cursorOffset: cls.length + 7
            });
          }
        });
      } else {
        // 5. General programming keywords, methods, fields, classes
        const KEYWORD_ITEMS = [
          { name: "System.out.println()", badge: "snip", type: "snippet", insertText: "System.out.println();", cursorOffset: 19 },
          { name: "sout", badge: "snip", type: "snippet", insertText: "System.out.println();", cursorOffset: 19 },
          { name: "System.out.print()", badge: "snip", type: "snippet", insertText: "System.out.print();", cursorOffset: 17 },
          { name: "System", badge: "cls", type: "class", insertText: "System." },
          { name: "new", badge: "kw", type: "kw", insertText: "new " },
          { name: "public", badge: "kw", type: "kw", insertText: "public " },
          { name: "private", badge: "kw", type: "kw", insertText: "private " },
          { name: "protected", badge: "kw", type: "kw", insertText: "protected " },
          { name: "static", badge: "kw", type: "kw", insertText: "static " },
          { name: "final", badge: "kw", type: "kw", insertText: "final " },
          { name: "class", badge: "kw", type: "kw", insertText: "class " },
          { name: "return", badge: "kw", type: "kw", insertText: "return " },
          { name: "this", badge: "kw", type: "kw", insertText: "this." },
          { name: "String", badge: "kw", type: "kw", insertText: "String " },
          { name: "int", badge: "kw", type: "kw", insertText: "int " },
          { name: "double", badge: "kw", type: "kw", insertText: "double " },
          { name: "boolean", badge: "kw", type: "kw", insertText: "boolean " },
          { name: "void", badge: "kw", type: "kw", insertText: "void " },
          { name: "public static void main", badge: "snip", type: "snippet", insertText: "public static void main(String[] args) {\n    \n}", cursorOffset: 46 }
        ];

        KEYWORD_ITEMS.forEach(k => pool.push(k));

        // Known Classes
        this.knownClasses.forEach(cls => {
          if (cls !== "Main") {
            pool.push({ name: cls, badge: "cls", type: "class", insertText: cls });
          }
        });

        // Known Fields
        this.knownFields.forEach((info, fName) => {
          pool.push({ name: fName, badge: "var", type: "field", insertText: fName });
        });

        // Known Methods (including automatic getters & setters)
        this.knownMethods.forEach(m => {
          pool.push({
            name: `${m.name}()`,
            badge: "fn",
            type: "method",
            insertText: `${m.name}()`,
            cursorOffset: m.name.length + 2
          });

          // Getter snippet
          if (m.isGetter && m.targetField) {
            const body = `public ${m.returnType} ${m.name}() {\n        return this.${m.targetField};\n    }`;
            pool.push({
              name: `${m.name}() { return }`,
              badge: "fn",
              type: "snippet",
              insertText: body,
              cursorOffset: body.length
            });
          }

          // Setter snippet
          if (m.isSetter && m.targetField) {
            const body = `public void ${m.name}(${m.params}) {\n        this.${m.targetField} = ${m.targetField};\n    }`;
            pool.push({
              name: `${m.name}(val) { }`,
              badge: "fn",
              type: "snippet",
              insertText: body,
              cursorOffset: body.length
            });
          }
        });
      }

      // Ranking & Scoring Algorithm (Priority to prefix match & exact keywords)
      const scoreItem = (item) => {
        // Preferred class constructor (e.g. 'MedicalRecord()' after '= new') gets highest priority
        if (item.isPreferred) {
          if (!q || q === "new" || item.name.toLowerCase().startsWith(q)) {
            return 2500;
          }
        }

        if (!q) return 10;
        const name = item.name.toLowerCase();
        const clean = name.replace(/[();{}]/g, "").trim();

        // Exact match
        if (clean === q || name === q) return 1000;

        // Boost for System.out.println() when typing sys, sout, print, println
        if (item.name === "System.out.println()") {
          if (["sout", "sys", "system", "print", "println", "sy", "pr"].includes(q)) return 950;
          if ("system.out.println".startsWith(q)) return 920;
          if (q.startsWith("sys") || q.startsWith("print")) return 850;
        }

        // Prefix match
        if (clean.startsWith(q)) {
          let s = 500 - clean.length;
          // Priority for keywords when typing prefix like 'p' or 'pub'
          if (item.type === "kw") s += 40;
          return s;
        }

        if (name.startsWith(q)) {
          return 450 - name.length;
        }

        // Substring / camelCase word-boundary match (e.g. 'name' in 'getName')
        const idx = name.indexOf(q);
        if (idx !== -1) {
          if (idx > 0 && /[A-Z_]/.test(item.name.charAt(idx))) {
            return 300 - idx;
          }
          return 100 - idx;
        }

        return 0;
      };

      return pool
        .map(it => ({ item: it, s: scoreItem(it) }))
        .filter(x => x.s > 0)
        .sort((a, b) => b.s - a.s)
        .map(x => x.item)
        .slice(0, 6);
    },

    renderDropdown() {
      if (!this.dropdownEl) return;
      let html = "";
      this.suggestions.forEach((item, idx) => {
        const badgeClass = item.type === "class" ? "badge-class" :
                           item.type === "new" ? "badge-new" :
                           item.type === "field" ? "badge-field" :
                           item.type === "method" ? "badge-method" :
                           item.type === "snippet" ? "badge-snippet" : "badge-kw";

        const displayBadge = item.badge || (item.type === "class" ? "cls" :
                                            item.type === "field" ? "var" :
                                            item.type === "method" ? "fn" :
                                            item.type === "snippet" ? "snip" : "kw");

        html += `
          <div class="ac-item ${idx === this.selectedIndex ? "active" : ""}" data-idx="${idx}">
            <span class="ac-item-badge ${badgeClass}">${displayBadge}</span>
            <span class="ac-item-name">${this.escapeHTML(item.name)}</span>
          </div>
        `;
      });

      this.dropdownEl.innerHTML = html;
      this.dropdownEl.style.display = "block";
      this.isOpen = true;

      this.dropdownEl.querySelectorAll(".ac-item").forEach(el => {
        el.addEventListener("mousedown", (e) => {
          e.preventDefault();
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

      let top = coords.top - wrapperRect.top + 6;
      let left = coords.left - wrapperRect.left;

      if (left < 10) left = 10;
      if (left + 220 > wrapperRect.width) left = Math.max(10, wrapperRect.width - 230);
      if (top + 155 > wrapperRect.height) top = Math.max(10, top - 165);

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

      const insertStr = item.insertText;
      textarea.value = val.substring(0, start) + insertStr + val.substring(end);

      const targetPos = start + (item.cursorOffset !== undefined ? item.cursorOffset : insertStr.length);
      textarea.selectionStart = textarea.selectionEnd = targetPos;

      this.closeDropdown();
      this.scanCode();
      this.renderChipsBar();
      this.updateHighlighting();
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
    // SMART SUGGESTION CHIPS BAR
    // --------------------------------------------------------------------------

    renderChipsBar() {
      if (!this.chipsBarEl) return;
      const isEn = (global.OOP_I18N && typeof global.OOP_I18N.getLang === "function")
        ? global.OOP_I18N.getLang() === "en"
        : (typeof localStorage !== "undefined" && localStorage.getItem("OOP_LANG") === "en");
      const classesList = Array.from(this.knownClasses).filter(c => c !== "Main");
      let html = `<span class="chip-label-prefix">${isEn ? "⚡ Variants:" : "⚡ Variantlar:"}</span>`;

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

      // Add known fields (up to 4 actual fields from challenge / code)
      const topFields = Array.from(this.knownFields.keys()).slice(0, 4);
      topFields.forEach(fName => {
        html += `
          <button type="button" class="smart-chip-btn chip-class" data-action="insert" data-text="${fName}" title="${isEn ? "Field" : "Maydon"}: ${fName}">
            <span>🏷️</span> ${fName}
          </button>
        `;
      });

      // Add known methods (ONLY methods genuinely declared in code or required by challenge)
      const topMethods = Array.from(this.knownMethods.keys()).slice(0, 4);

      topMethods.forEach(mName => {
        const isGetter = mName.startsWith("get") || mName.startsWith("is");
        const insText = isGetter ? `${mName}()` : `${mName}();`;
        const offset = mName.length + 2;
        html += `
          <button type="button" class="smart-chip-btn chip-new" data-action="insert" data-text="${insText}" data-offset="${offset}" title="${mName}">
            <span>⚡</span> ${mName}()
          </button>
        `;
      });

      html += `
        <button type="button" class="smart-chip-btn chip-snippet" data-action="insert" data-text="System.out.println();" data-offset="19" title="${isEn ? "Standard print statement" : "Chiqarish buyrug'i"}">
          <span>🖨️</span> sout
        </button>
        <button type="button" class="smart-chip-btn chip-kw" data-action="insert" data-text="private " title="${isEn ? "private modifier" : "private modifikatori"}">
          private
        </button>
        <button type="button" class="smart-chip-btn chip-kw" data-action="insert" data-text="public " title="${isEn ? "public modifier" : "public modifikatori"}">
          public
        </button>
      `;

      this.chipsBarEl.innerHTML = html;

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
            textarea.selectionStart = textarea.selectionEnd = start + cls.length + 12;
          } else if (action === "generic-class") {
            const template = `class Model {\n    \n}\n`;
            textarea.value = val.substring(0, start) + template + val.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + 18;
          }

          textarea.focus();
          this.scanCodeForClasses();
          this.renderChipsBar();
          this.updateHighlighting();
          this.triggerInputEvent();
        });
      });
    },

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
      mirror.style.whiteSpace = "pre";
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
