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
          min-height: 290px;
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
          min-height: 290px;
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

        /* Floating Autocomplete Dropdown */
        .code-autocomplete-dropdown {
          position: absolute;
          z-index: 1000;
          background: #0d0a1f;
          border: 1.5px solid #7c3aed;
          border-radius: 8px;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.8), 0 0 20px rgba(124, 58, 237, 0.35);
          min-width: 240px;
          max-width: 380px;
          max-height: 230px;
          overflow-y: auto;
          overflow-x: hidden;
          font-family: Consolas, 'Courier New', monospace;
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
        }
        .badge-class {
          background: rgba(124, 58, 237, 0.25);
          color: #c4b5fd;
          border: 1px solid rgba(168, 85, 247, 0.5);
        }
        .badge-method {
          background: rgba(59, 130, 246, 0.25);
          color: #93c5fd;
          border: 1px solid rgba(59, 130, 246, 0.5);
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

      if (start === end) {
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
      if (!this.codeArea) return;
      const code = this.codeArea.value || "";
      this.knownClasses = new Set(["Main"]);

      if (this.currentChallenge && this.currentChallenge.requirements && this.currentChallenge.requirements.classes) {
        this.currentChallenge.requirements.classes.forEach(c => {
          if (c && typeof c === "string") this.knownClasses.add(c.trim());
        });
      }

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

      const lineStart = val.lastIndexOf("\n", pos - 1) + 1;
      const lineText = val.substring(lineStart, pos);

      const wordMatch = lineText.match(/([A-Za-z0-9_]+)$/);
      const currentWord = wordMatch ? wordMatch[1] : "";
      this.currentFilterWord = currentWord;
      this.wordStartIndex = pos - currentWord.length;

      const isAfterClassKeyword = /class\s+$/i.test(lineText) || /class\s+([A-Za-z0-9_]*)$/i.test(lineText);
      const isAfterNewKeyword = /new\s+$/i.test(lineText) || /new\s+([A-Za-z0-9_]*)$/i.test(lineText);

      if (!forceOpen && currentWord.length === 0 && !isAfterClassKeyword && !isAfterNewKeyword) {
        this.closeDropdown();
        return;
      }

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

      if (isAfterClass) {
        classesList.forEach(cls => {
          if (!q || cls.toLowerCase().startsWith(q)) {
            results.push({
              name: cls,
              type: "class",
              badge: "Class",
              insertText: cls + " {\n    \n}",
              cursorOffset: cls.length + 7,
              hint: "Class blueprint"
            });
          }
        });
        return results;
      }

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

      classesList.forEach(cls => {
        if (!q || cls.toLowerCase().includes(q)) {
          results.push({
            name: cls,
            type: "class",
            badge: "Class",
            insertText: cls,
            cursorOffset: cls.length,
            hint: "Custom Class"
          });

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

      return results.slice(0, 8);
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
      if (left + 280 > wrapperRect.width) left = Math.max(10, wrapperRect.width - 290);
      if (top + 230 > wrapperRect.height) top = Math.max(10, top - 245);

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
      this.scanCodeForClasses();
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
