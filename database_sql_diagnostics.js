/**
 * ============================================================================
 * DATABASE SYSTEMS ACADEMY — HIGH-PRECISION SQL DIAGNOSTICS ENGINE
 * Professor Atlas's Pinpoint Line-by-Line Syntax & Semantic Verifier
 * ============================================================================
 * Aniq qator, tinish belgilari (; , () ''), kalit so'z xatoliklari va
 * relyatsion mantiqni detallashtirilgan tarzda tahlil qiluvchi modul.
 */

(function () {
  'use strict';

  const KEYWORD_TYPOS = {
    'creat': 'CREATE',
    'cretae': 'CREATE',
    'craete': 'CREATE',
    'tabel': 'TABLE',
    'tabels': 'TABLE',
    'primari': 'PRIMARY',
    'prmary': 'PRIMARY',
    'primay': 'PRIMARY',
    'foriegn': 'FOREIGN',
    'foreing': 'FOREIGN',
    'forien': 'FOREIGN',
    'referance': 'REFERENCES',
    'refernces': 'REFERENCES',
    'refereneces': 'REFERENCES',
    'referenc': 'REFERENCES',
    'constrain': 'CONSTRAINT',
    'contraint': 'CONSTRAINT',
    'cosntraint': 'CONSTRAINT',
    'selest': 'SELECT',
    'slect': 'SELECT',
    'seelct': 'SELECT',
    'selec': 'SELECT',
    'form': 'FROM',
    'fomr': 'FROM',
    'frm': 'FROM',
    'wher': 'WHERE',
    'whrer': 'WHERE',
    'were': 'WHERE',
    'wherer': 'WHERE',
    'oeder': 'ORDER',
    'orer': 'ORDER',
    'gropu': 'GROUP',
    'gorup': 'GROUP',
    'havng': 'HAVING',
    'havin': 'HAVING',
    'haveing': 'HAVING',
    'jion': 'JOIN',
    'jon': 'JOIN',
    'distinc': 'DISTINCT',
    'distinctt': 'DISTINCT',
    'betwen': 'BETWEEN',
    'betwean': 'BETWEEN',
    'varchr': 'VARCHAR',
    'varcahr': 'VARCHAR',
    'vachar': 'VARCHAR',
    'integar': 'INTEGER',
    'intiger': 'INTEGER',
    'intger': 'INTEGER',
    'bolean': 'BOOLEAN',
    'boolen': 'BOOLEAN',
    'numerik': 'NUMERIC',
    'decimel': 'DECIMAL'
  };

  const TABLE_TYPOS = {
    'employee': { correct: 'emp', desc: "Xodimlar jadvali" },
    'employees': { correct: 'emp', desc: "Xodimlar jadvali" },
    'empp': { correct: 'emp', desc: "Xodimlar jadvali" },
    'department': { correct: 'dept', desc: "Bo'limlar jadvali" },
    'departments': { correct: 'dept', desc: "Bo'limlar jadvali" },
    'dep': { correct: 'dept', desc: "Bo'limlar jadvali" },
    'salgrades': { correct: 'salgrade', desc: "Maosh darajalari jadvali" },
    'salarygrade': { correct: 'salgrade', desc: "Maosh darajalari jadvali" }
  };

  const COLUMN_TYPOS = {
    'salary': { correct: 'sal', desc: "Xodim maoshi ustuni" },
    'wage': { correct: 'sal', desc: "Xodim maoshi ustuni" },
    'name': { correct: 'ename', desc: "Xodim ismi ustuni" },
    'employee_name': { correct: 'ename', desc: "Xodim ismi ustuni" },
    'emp_name': { correct: 'ename', desc: "Xodim ismi ustuni" },
    'empname': { correct: 'ename', desc: "Xodim ismi ustuni" },
    'department_id': { correct: 'deptno', desc: "Bo'lim raqami ustuni" },
    'dep_id': { correct: 'deptno', desc: "Bo'lim raqami ustuni" },
    'dno': { correct: 'deptno', desc: "Bo'lim raqami ustuni" },
    'department_no': { correct: 'deptno', desc: "Bo'lim raqami ustuni" },
    'manager': { correct: 'supervisor', alt: 'mgr', desc: "Rahbar ustuni" },
    'manager_id': { correct: 'supervisor', alt: 'mgr', desc: "Rahbar ustuni" },
    'mgr_id': { correct: 'supervisor', alt: 'mgr', desc: "Rahbar ustuni" },
    'department_name': { correct: 'dname', desc: "Bo'lim nomi ustuni" },
    'dept_name': { correct: 'dname', desc: "Bo'lim nomi ustuni" },
    'location': { correct: 'loc', desc: "Joylashuv ustuni" },
    'commission': { correct: 'comm', desc: "Mukofot ustuni" },
    'bonus': { correct: 'comm', desc: "Mukofot ustuni" },
    'hire_date': { correct: 'hiredate', desc: "Ishga kirgan sana ustuni" }
  };

  const DatabaseSQLDiagnostics = {
    /**
     * Main entry point to diagnose student's SQL code
     * @param {string} rawSql - student's typed SQL
     * @param {object} question - question object with requirements/expectedSchema/solutions
     * @param {string} mode - 'ddl' | 'dml' | 'auto'
     * @returns {object} - { passed, errors: [{line, message, snippet, fix}], passedItems: [], formattedReport: string }
     */
    diagnose(rawSql, question = {}, mode = 'auto') {
      const isEn = typeof window !== 'undefined' && window.I18N && window.I18N.getLang() === 'en';
      const errors = [];
      const passedItems = [];

      if (!rawSql || !rawSql.trim()) {
        const emptyState = {
          passed: false,
          errors: [{
            line: 1,
            message: isEn ? "Editor is empty!" : "Muharrir bo'sh!",
            snippet: "",
            fix: isEn ? "Please type your SQL command before running tests." : "Iltimos, tekshirishdan oldin SQL buyruqlarini yozing."
          }],
          passedItems: []
        };
        return {
          ...emptyState,
          formattedReport: this.formatReport(emptyState, isEn),
          formattedHTML: this.formatReportHTML(emptyState, isEn)
        };
      }

      const lines = rawSql.split('\n');
      const cleanText = rawSql.trim();

      // Determine mode
      let effectiveMode = mode;
      if (effectiveMode === 'auto') {
        if (/^\s*(CREATE|ALTER|DROP|TRUNCATE)\b/i.test(cleanText)) {
          effectiveMode = 'ddl';
        } else {
          effectiveMode = 'dml';
        }
      }

      // 1. UNICODE & SMART QUOTES CHECK
      this.checkSmartQuotes(lines, errors, isEn);

      // 2. SINGLE QUOTE BALANCE CHECK (')
      this.checkSingleQuotes(lines, errors, isEn);

      // 3. PARENTHESIS BALANCE CHECK (())
      this.checkParentheses(lines, errors, isEn);

      // 4. COMMA (,) CHECKS (Trailing comma before ')', double comma, missing comma)
      this.checkCommas(lines, errors, isEn, effectiveMode);

      // 5. SEMICOLON (;) CHECKS (Premature semicolon & missing final semicolon)
      this.checkSemicolons(lines, cleanText, errors, isEn);

      // 6. KEYWORD TYPOS
      this.checkKeywordTypos(lines, errors, isEn);

      // 7. MODE SPECIFIC PARSING (DDL vs DML)
      if (effectiveMode === 'ddl') {
        this.checkDDLSpecifics(lines, cleanText, question, errors, passedItems, isEn);
      } else {
        this.checkDMLSpecifics(lines, cleanText, question, errors, passedItems, isEn);
      }

      const passed = errors.length === 0;

      return {
        passed,
        errors,
        passedItems,
        formattedReport: this.formatReport({ passed, errors, passedItems }, isEn),
        formattedHTML: this.formatReportHTML({ passed, errors, passedItems }, isEn)
      };
    },

    // 1. SMART QUOTES
    checkSmartQuotes(lines, errors, isEn) {
      lines.forEach((line, idx) => {
        const lineNum = idx + 1;
        if (/[“”‘’«»`´]/.test(line)) {
          errors.push({
            line: lineNum,
            message: isEn 
              ? "Non-standard quote character detected (Word/smart quote)."
              : "Standart bo'lmagan matn tirnog'i (Word/Telegram smart quote) aniqlandi.",
            snippet: line.trim(),
            fix: isEn 
              ? "Replace smart quotes with standard single quotes (')."
              : "Ushbu belgilarni standart oddiy bittalik tirnoq (') bilan almashtiring."
          });
        }
      });
    },

    // 2. SINGLE QUOTES
    checkSingleQuotes(lines, errors, isEn) {
      let inQuote = false;
      let openLine = 1;
      let quoteSnippet = "";

      lines.forEach((line, idx) => {
        const lineNum = idx + 1;
        // strip comments
        const noComment = line.replace(/--.*$/, '');
        for (let i = 0; i < noComment.length; i++) {
          if (noComment[i] === "'") {
            // Check for escaped quote ''
            if (i + 1 < noComment.length && noComment[i + 1] === "'") {
              i++;
              continue;
            }
            inQuote = !inQuote;
            if (inQuote) {
              openLine = lineNum;
              quoteSnippet = line.trim();
            }
          }
        }
      });

      if (inQuote) {
        errors.push({
          line: openLine,
          message: isEn 
            ? "Unclosed single quote (') string literal."
            : "Matnli satr tirnog'i (') yopilmay qolgan.",
          snippet: quoteSnippet,
          fix: isEn 
            ? "Ensure all string literals are closed with a matching single quote (')."
            : "Barcha matnli qiymatlarni ochilgani kabi juft bittalik tirnoq (') bilan yoping."
        });
      }
    },

    // 3. PARENTHESES BALANCE
    checkParentheses(lines, errors, isEn) {
      let pStack = []; // stores { line, col }
      let extraClose = null;

      lines.forEach((line, idx) => {
        const lineNum = idx + 1;
        let inStr = false;
        const noComment = line.replace(/--.*$/, '');

        for (let i = 0; i < noComment.length; i++) {
          const ch = noComment[i];
          if (ch === "'") {
            if (i + 1 < noComment.length && noComment[i + 1] === "'") {
              i++;
              continue;
            }
            inStr = !inStr;
            continue;
          }
          if (inStr) continue;

          if (ch === '(') {
            pStack.push({ line: lineNum, snippet: line.trim() });
          } else if (ch === ')') {
            if (pStack.length === 0 && !extraClose) {
              extraClose = { line: lineNum, snippet: line.trim() };
            } else {
              pStack.pop();
            }
          }
        }
      });

      if (extraClose) {
        errors.push({
          line: extraClose.line,
          message: isEn 
            ? "Unexpected closing parenthesis ')' without matching opening '('."
            : "Ortiqcha yopuvchi ')' qavs yozilgan (mos ochiluvchi '(' qavs yo'q).",
          snippet: extraClose.snippet,
          fix: isEn 
            ? "Remove the extra ')' or verify earlier lines."
            : "Ortiqcha ')' qavsni olib tashlang yoki undan oldingi qatorlarni tekshiring."
        });
      } else if (pStack.length > 0) {
        const unclosed = pStack[pStack.length - 1];
        errors.push({
          line: unclosed.line,
          message: isEn 
            ? `Unclosed parenthesis '(' — missing matching ')' (Total unclosed: ${pStack.length}).`
            : `Ochilgan '(' qavs yopilmagan — mos ')' qavs tushib qolgan (Yopilmagan: ${pStack.length} ta).`,
          snippet: unclosed.snippet,
          fix: isEn 
            ? "Close all opened parentheses before the end of the query or statement."
            : "Buyruq oxirida yoki tegishli shart yakunida barcha qavslarni ')' bilan yoping."
        });
      }
    },

    // 4. COMMAS
    checkCommas(lines, errors, isEn, mode) {
      lines.forEach((line, idx) => {
        const lineNum = idx + 1;
        const noComment = line.replace(/--.*$/, '').trim();

        // 4a. Check double commas ,,
        if (/,[ \t]*,/.test(noComment)) {
          errors.push({
            line: lineNum,
            message: isEn ? "Duplicate consecutive commas (,,) detected." : "Ketma-ket ikkita vergul (,,) qo'yilgan.",
            snippet: line.trim(),
            fix: isEn ? "Remove the duplicate comma." : "Ortiqcha vergulni olib tashlang."
          });
        }

        // 4b. Check trailing comma before closing ')' on same line
        // e.g.: col_name varchar(50), );
        if (/,\s*\)/.test(noComment)) {
          errors.push({
            line: lineNum,
            message: isEn 
              ? "Trailing comma before closing parenthesis ')'."
              : "Qavs ')' dan oldin ortiqcha vergul (,) qo'yilgan.",
            snippet: line.trim(),
            fix: isEn 
              ? "In PostgreSQL and standard SQL, the last column/item must NOT have a trailing comma."
              : "PostgreSQL da eng oxirgi ustun yoki cheklovdan so'ng vergul qo'yilmaydi."
          });
        }

        // 4c. Multi-line trailing comma before next non-empty line starting with ')'
        if (noComment.endsWith(',')) {
          for (let j = idx + 1; j < lines.length; j++) {
            const nextClean = lines[j].replace(/--.*$/, '').trim();
            if (!nextClean) continue;
            if (nextClean.startsWith(')')) {
              errors.push({
                line: lineNum,
                message: isEn 
                  ? "Trailing comma before closing parenthesis ')' on the following line."
                  : "Keyingi qatordagi ')' qavsidan oldin ortiqcha vergul (,) qo'yilgan.",
                snippet: line.trim(),
                fix: isEn 
                  ? "In PostgreSQL and standard SQL, the last column/item must NOT have a trailing comma."
                  : "PostgreSQL da oxirgi ustun yoki cheklovdan so'ng vergul qo'yilmaydi."
              });
            }
            break;
          }
        }

        // 4d. DDL Missing Comma between column definitions
        if (mode === 'ddl') {
          const isColDef = /^\s*[a-zA-Z0-9_]+\s+(?:integer|int|smallint|bigint|varchar|char|numeric|decimal|date|timestamp|text|boolean|serial|bigserial)\b/i.test(noComment);
          const isConstraintDef = /^\s*(?:CONSTRAINT\s+[a-zA-Z0-9_]+\s+)?(?:PRIMARY\s+KEY|FOREIGN\s+KEY|UNIQUE|CHECK)\b/i.test(noComment);
          
          if ((isColDef || isConstraintDef) && !noComment.endsWith(',') && !noComment.endsWith('(') && !noComment.endsWith(');') && !noComment.endsWith(')')) {
            for (let j = idx + 1; j < lines.length; j++) {
              const nextClean = lines[j].replace(/--.*$/, '').trim();
              if (!nextClean) continue;
              const nextIsCol = /^\s*[a-zA-Z0-9_]+\s+(?:integer|int|smallint|bigint|varchar|char|numeric|decimal|date|timestamp|text|boolean|serial|bigserial)\b/i.test(nextClean);
              const nextIsConstraint = /^\s*(?:CONSTRAINT\s+[a-zA-Z0-9_]+\s+)?(?:PRIMARY\s+KEY|FOREIGN\s+KEY|UNIQUE|CHECK)\b/i.test(nextClean);
              if (nextIsCol || nextIsConstraint) {
                errors.push({
                  line: lineNum,
                  message: isEn 
                    ? "Missing comma (,) at the end of column/constraint definition."
                    : "Ustun yoki cheklov ta'rifi oxirida vergul (,) qolib ketgan.",
                  snippet: line.trim(),
                  fix: isEn 
                    ? "Add a comma ',' at the end of this line to separate it from the next column."
                    : "Keyingi ustundan ajratish uchun ushbu qator oxiriga vergul (,) qo'ying."
                });
              }
              break;
            }
          }
        }
      });
    },

    // 5. SEMICOLONS
    checkSemicolons(lines, cleanText, errors, isEn) {
      lines.forEach((line, idx) => {
        const lineNum = idx + 1;
        const noComment = line.replace(/--.*$/, '').trim();

        // 1. Premature semicolon inside CREATE TABLE before final ')'
        // e.g. "CREATE TABLE emp; ("
        if (/CREATE\s+TABLE\s+[a-zA-Z0-9_]+\s*;/i.test(noComment)) {
          errors.push({
            line: lineNum,
            message: isEn 
              ? "Premature semicolon (;) right after table name before column definition."
              : "Jadval nomidan so'ng erta ';' (nuqta-vergul) qo'yilgan.",
            snippet: line.trim(),
            fix: isEn 
              ? "Remove ';' from the table name line. Semicolons belong only at the very end of the statement."
              : "Jadval nomidan keyingi ';' ni o'chiring. Nuqta-vergul faqat butun buyruq oxiriga qo'yiladi."
          });
        }

        // 2. Premature semicolon between clauses: "FROM emp; WHERE" or "emp; ORDER BY"
        if (/\bFROM\s+[a-zA-Z0-9_]+\s*;\s*WHERE\b/i.test(noComment)) {
          errors.push({
            line: lineNum,
            message: isEn 
              ? "Premature semicolon (;) between 'FROM' and 'WHERE'."
              : "'FROM' va 'WHERE' orasida noto'g'ri ';' (nuqta-vergul) qo'yilgan.",
            snippet: line.trim(),
            fix: isEn 
              ? "Remove ';' before 'WHERE'. The semicolon must terminate the whole query at the end."
              : "'WHERE' dan oldingi ';' ni o'chiring. So'rov faqat eng oxirida ';' bilan tugaydi."
          });
        }

        if (/;\s*\b(WHERE|ORDER\s+BY|GROUP\s+BY|HAVING)\b/i.test(noComment)) {
          errors.push({
            line: lineNum,
            message: isEn 
              ? "Premature semicolon (;) in the middle of SQL query before clause."
              : "So'rov o'rtasida shart bandlaridan oldin xato ';' (nuqta-vergul) qo'yilgan.",
            snippet: line.trim(),
            fix: isEn 
              ? "Remove ';' from the middle of the query. Semicolon belongs only at the end."
              : "O'rtadagi ';' ni o'chiring. Nuqta-vergul faqat so'rov yakunida qo'yiladi."
          });
        }

        // 3. Semicolon before closing parenthesis
        if (/;\s*\)/.test(noComment)) {
          errors.push({
            line: lineNum,
            message: isEn 
              ? "Semicolon (;) placed inside parentheses before ')'."
              : "Qavs ')' ichida nuqta-vergul (;) qo'yilgan.",
            snippet: line.trim(),
            fix: isEn 
              ? "Move the semicolon outside the closing parenthesis: ');'."
              : "Nuqta-vergulni qavs tashqarisiga o'tkazing: ');'."
          });
        }
      });

      // 4. Missing trailing semicolon
      const noCommentsAll = cleanText.replace(/--.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '').trim();
      if (noCommentsAll && !noCommentsAll.endsWith(';')) {
        errors.push({
          line: lines.length,
          message: isEn 
            ? "Missing trailing semicolon (;) at the end of SQL command."
            : "SQL buyrug'i oxirida ';' (nuqta-vergul) belgisi qolib ketgan.",
          snippet: lines[lines.length - 1].trim(),
          fix: isEn 
            ? "Add ';' at the very end of your SQL statement."
            : "SQL buyrug'ini qat'iy standartga binoan oxirida ';' (nuqta-vergul) bilan yakunlang."
        });
      }
    },

    // 6. KEYWORD TYPOS
    checkKeywordTypos(lines, errors, isEn) {
      lines.forEach((line, idx) => {
        const lineNum = idx + 1;
        const noComment = line.replace(/--.*$/, '');
        // Extract plain words outside quotes
        const noStrings = noComment.replace(/'[^']*'/g, "''");
        const words = noStrings.match(/\b[a-zA-Z_]+\b/g) || [];

        words.forEach(w => {
          const lower = w.toLowerCase();
          if (KEYWORD_TYPOS[lower]) {
            const correct = KEYWORD_TYPOS[lower];
            errors.push({
              line: lineNum,
              message: isEn 
                ? `Typo in SQL keyword: '${w}'.`
                : `SQL kalit so'zida xatolik: '${w}'.`,
              snippet: line.trim(),
              fix: isEn 
                ? `Replace '${w}' with correct keyword '${correct}'.`
                : `'${w}' o'rniga to'g'ri '${correct}' so'zini yozing.`
            });
          }
        });
      });
    },

    // 7. DDL SPECIFIC CHECKS
    checkDDLSpecifics(lines, cleanText, question, errors, passedItems, isEn) {
      // Must start with DDL command
      if (!/^\s*(CREATE|ALTER|DROP|SET|COMMENT|TRUNCATE)\b/i.test(cleanText)) {
        errors.push({
          line: 1,
          message: isEn 
            ? "SQL DDL statement must begin with 'CREATE TABLE', 'ALTER TABLE', or 'DROP TABLE'."
            : "SQL DDL buyrug'i 'CREATE TABLE', 'ALTER TABLE' yoki 'DROP TABLE' bilan boshlanishi kerak.",
          snippet: lines[0].trim(),
          fix: isEn 
            ? "Start your command with CREATE TABLE <table_name> (...);"
            : "Buyrug'ingizni CREATE TABLE <jadval_nomi> (...); tarzida boshlang."
        });
        return;
      }

      // Check PostgreSQL types without/with incorrect precision
      lines.forEach((line, idx) => {
        const lineNum = idx + 1;
        const noComment = line.replace(/--.*$/, '');

        // INTEGER(n) check
        if (/\binteger\s*\(\d+\)/i.test(noComment) || /\bint\s*\(\d+\)/i.test(noComment)) {
          errors.push({
            line: lineNum,
            message: isEn 
              ? "Integer types in PostgreSQL ('integer', 'int') do NOT accept precision arguments like int(11)."
              : "PostgreSQL da 'integer' yoki 'int' turiga int(11) kabi qavsda son yozilmaydi.",
            snippet: line.trim(),
            fix: isEn 
              ? "Write simply 'integer' or 'int' without parentheses."
              : "Shunchaki 'integer' yoki 'int' deb yozing (qavssiz)."
          });
        }

        // BOOLEAN(n) check
        if (/\bboolean\s*\(\d+\)/i.test(noComment) || /\bbool\s*\(\d+\)/i.test(noComment)) {
          errors.push({
            line: lineNum,
            message: isEn 
              ? "'boolean' data type does not take length parameters."
              : "'boolean' turiga qavs ichida parametr berilmaydi.",
            snippet: line.trim(),
            fix: isEn ? "Write simply 'boolean'." : "Shunchaki 'boolean' deb yozing."
          });
        }

        // VARCHAR without precision in standard tables
        if (/\bvarchar\b(?!\s*\()/i.test(noComment) && !/\bcast\b/i.test(noComment)) {
          // Warning/error for explicit column definitions
          if (/\b[a-zA-Z0-9_]+\s+varchar\b(?!\s*\()/i.test(noComment)) {
            errors.push({
              line: lineNum,
              message: isEn 
                ? "VARCHAR column without length specified (e.g., varchar(50))."
                : "'varchar' ustunida maksimal uzunlik belgilanmagan (masalan, varchar(50) yoki varchar(100)).",
              snippet: line.trim(),
              fix: isEn 
                ? "Specify maximum character capacity: varchar(50) or varchar(100)."
                : "Maksimal belgilar sig'imini belgilang: varchar(50) yoki varchar(100)."
            });
          }
        }
      });

      // Question-specific schema checks
      if (question.expectedSchema) {
        const exp = question.expectedSchema;
        const normClean = cleanText.toLowerCase();

        // Check Table Name
        if (exp.tableName) {
          const tNorm = exp.tableName.toLowerCase();
          if (!normClean.includes(tNorm)) {
            errors.push({
              line: 1,
              message: isEn 
                ? `Expected table name '${exp.tableName}' not found.`
                : `Kutilgan '${exp.tableName}' jadval nomi topilmadi.`,
              snippet: lines[0].trim(),
              fix: isEn 
                ? `Create table with name '${exp.tableName}'.`
                : `Jadval nomini '${exp.tableName}' deb belgilang.`
            });
          } else {
            passedItems.push({ name: isEn ? "Table Name" : "Jadval Nomi", detail: exp.tableName });
          }
        }

        // Check Columns
        if (exp.columns && Array.isArray(exp.columns)) {
          exp.columns.forEach(col => {
            const cNorm = col.name.toLowerCase();
            if (!normClean.includes(cNorm)) {
              errors.push({
                line: 2,
                message: isEn 
                  ? `Required column '${col.name}' is missing.`
                  : `Talab qilingan '${col.name}' ustuni kiritilmagan.`,
                snippet: "",
                fix: isEn 
                  ? `Add column: ${col.name} ${col.type || 'integer'}`
                  : `'${col.name}' ustunini qo'shing: ${col.name} ${col.type || 'integer'}`
              });
            } else {
              passedItems.push({ name: isEn ? "Column" : "Ustun", detail: col.name });
            }
          });
        }
      }
    },

    // 8. DML SPECIFIC CHECKS
    checkDMLSpecifics(lines, cleanText, question, errors, passedItems, isEn) {
      const normClean = cleanText.toLowerCase();

      // Must start with SELECT or WITH
      if (!/^\s*(SELECT|WITH)\b/i.test(cleanText)) {
        errors.push({
          line: 1,
          message: isEn 
            ? "SQL query must begin with 'SELECT' (or 'WITH')."
            : "SQL ma'lumot tanlash so'rovi 'SELECT' (yoki 'WITH') kalit so'zi bilan boshlanishi kerak.",
          snippet: lines[0].trim(),
          fix: isEn 
            ? "Start your query with 'SELECT ... FROM ...';"
            : "So'rovingizni 'SELECT ... FROM ...;' shaklida boshlang."
        });
        return;
      }

      // Check FROM clause exists if query is not pure scalar math
      if (!/\bFROM\b/i.test(cleanText) && !/^\s*SELECT\s+[\d\s\+\-\*\/]+\s*;?\s*$/i.test(cleanText)) {
        errors.push({
          line: 1,
          message: isEn 
            ? "'FROM' clause is missing. Which table are you querying?"
            : "'FROM' bandi tushib qolgan. Ma'lumot qaysi jadvaldan tanlanishi kerak?",
          snippet: lines[0].trim(),
          fix: isEn 
            ? "Add 'FROM emp' (or relevant table) to specify data source."
            : "'FROM emp' (yoki tegishli jadval nomini) qo'shing."
        });
      }

      // Check Table Name Typos
      lines.forEach((line, idx) => {
        const lineNum = idx + 1;
        const noComment = line.replace(/--.*$/, '');
        const fromMatch = noComment.match(/\b(?:FROM|JOIN)\s+([a-zA-Z0-9_]+)/i);
        if (fromMatch) {
          const tbl = fromMatch[1].toLowerCase();
          if (TABLE_TYPOS[tbl]) {
            const info = TABLE_TYPOS[tbl];
            errors.push({
              line: lineNum,
              message: isEn 
                ? `Table '${fromMatch[1]}' not found in database.`
                : `'${fromMatch[1]}' nomli jadval bazada mavjud emas (${info.desc}).`,
              snippet: line.trim(),
              fix: isEn 
                ? `Use table name '${info.correct}'.`
                : `To'g'ri jadval nomini yozing: '${info.correct}'.`
            });
          }
        }
      });

      // Check Column Name Typos
      lines.forEach((line, idx) => {
        const lineNum = idx + 1;
        const noComment = line.replace(/--.*$/, '');
        const noStrings = noComment.replace(/'[^']*'/g, "''");
        const words = noStrings.match(/\b[a-zA-Z_][a-zA-Z0-9_]*\b/g) || [];

        words.forEach(w => {
          const lower = w.toLowerCase();
          if (COLUMN_TYPOS[lower]) {
            const info = COLUMN_TYPOS[lower];
            errors.push({
              line: lineNum,
              message: isEn 
                ? `Column '${w}' not found in database schema (${info.desc}).`
                : `'${w}' nomli ustun bazada topilmadi (${info.desc}).`,
              snippet: line.trim(),
              fix: isEn 
                ? `Use column '${info.correct}'${info.alt ? ` (or '${info.alt}')` : ''}.`
                : `To'g'ri ustun nomini yozing: '${info.correct}'${info.alt ? ` (yoki '${info.alt}')` : ''}.`
            });
          }
        });
      });

      // Check for missing commas in SELECT clause (e.g. "SELECT empno ename FROM emp")
      lines.forEach((line, idx) => {
        const lineNum = idx + 1;
        const noComment = line.replace(/--.*$/, '');
        if (/\bSELECT\b/i.test(noComment)) {
          const selectPart = noComment.split(/\bFROM\b/i)[0].replace(/^\s*SELECT\s+(?:DISTINCT\s+)?/i, '').trim();
          const knownCols = ["empno", "ename", "job", "sal", "comm", "deptno", "hiredate", "supervisor", "mgr", "dname", "loc", "grade"];
          for (let i = 0; i < knownCols.length; i++) {
            for (let j = 0; j < knownCols.length; j++) {
              if (i === j) continue;
              const re = new RegExp(`\\b${knownCols[i]}\\s+${knownCols[j]}\\b`, 'i');
              if (re.test(selectPart)) {
                errors.push({
                  line: lineNum,
                  message: isEn 
                    ? `Missing comma (,) between column names '${knownCols[i]}' and '${knownCols[j]}'.`
                    : `'${knownCols[i]}' va '${knownCols[j]}' ustunlari orasida vergul (,) qolib ketgan.`,
                  snippet: line.trim(),
                  fix: isEn 
                    ? `Separate columns with a comma: '${knownCols[i]}, ${knownCols[j]}'`
                    : `Ustunlarni vergul bilan ajrating: '${knownCols[i]}, ${knownCols[j]}'`
                });
              }
            }
          }
        }
      });

      // Check 3-Valued Logic NULL comparison: = NULL or <> NULL
      lines.forEach((line, idx) => {
        const lineNum = idx + 1;
        const noComment = line.replace(/--.*$/, '');
        if (/(=|<>|!=)\s*NULL\b/i.test(noComment)) {
          errors.push({
            line: lineNum,
            message: isEn 
              ? "3-Valued Logic trap: Comparison with NULL using '=' or '<>'."
              : "3-Qiymatli Mantiq (NULL Tuzog'i): '= NULL' yoki '<> NULL' ishlatilgan.",
            snippet: line.trim(),
            fix: isEn 
              ? "In SQL, '= NULL' always yields UNKNOWN. Use 'IS NULL' or 'IS NOT NULL' instead."
              : "SQL da '= NULL' har doim UNKNOWN qaytaradi. Buning o'rniga 'IS NULL' yoki 'IS NOT NULL' dan foydalaning."
          });
        }
      });

      // Check Aggregate function inside WHERE clause
      let inWhere = false;
      lines.forEach((line, idx) => {
        const lineNum = idx + 1;
        const noComment = line.replace(/--.*$/, '');
        let targetText = "";

        if (/\bWHERE\b/i.test(noComment)) {
          targetText = noComment.split(/\bWHERE\b/i)[1] || "";
        } else if (inWhere) {
          targetText = noComment;
        }

        if (/\bWHERE\b/i.test(noComment)) inWhere = true;
        if (/\b(GROUP\s+BY|ORDER\s+BY|HAVING|LIMIT)\b/i.test(noComment)) inWhere = false;

        if (targetText) {
          const beforeOther = targetText.split(/\b(GROUP\s+BY|ORDER\s+BY|HAVING|LIMIT)\b/i)[0];
          const hasAgg = /\b(COUNT|SUM|AVG|MIN|MAX)\s*\(/i.test(beforeOther);
          const hasSubquery = /\(\s*SELECT\b/i.test(beforeOther);

          if (hasAgg && !hasSubquery) {
            errors.push({
              line: lineNum,
              message: isEn 
                ? "Aggregate function (COUNT, AVG, SUM...) cannot be used directly in WHERE clause."
                : "WHERE bandida agregat funksiyani (COUNT, AVG, SUM, MIN, MAX) to'g'ridan-to'g'ri ishlatib bo'lmaydi.",
              snippet: line.trim(),
              fix: isEn 
                ? "WHERE filters rows before grouping. Use GROUP BY ... HAVING, or compute aggregate in a subquery."
                : "WHERE qatorlarni guruhlashdan oldin filtrlaydi. GROUP BY ... HAVING bandidan yoki subquery'dan foydalaning."
            });
          }
        }
      });

      // Check Clause Order: WHERE before ORDER BY
      const whereIdx = normClean.indexOf('where');
      const orderIdx = normClean.indexOf('order by');
      const groupIdx = normClean.indexOf('group by');
      const havingIdx = normClean.indexOf('having');

      if (whereIdx !== -1 && orderIdx !== -1 && whereIdx > orderIdx) {
        errors.push({
          line: 2,
          message: isEn 
            ? "'WHERE' clause must appear BEFORE 'ORDER BY' clause."
            : "'WHERE' sharti 'ORDER BY' dan oldin kelishi shart.",
          snippet: "",
          fix: isEn 
            ? "Reorder: SELECT ... FROM ... WHERE ... ORDER BY ...;"
            : "Tartibni to'g'rilang: SELECT ... FROM ... WHERE ... ORDER BY ...;"
        });
      }

      if (groupIdx !== -1 && havingIdx !== -1 && groupIdx > havingIdx) {
        errors.push({
          line: 2,
          message: isEn 
            ? "'HAVING' clause must appear AFTER 'GROUP BY'."
            : "'HAVING' filtri faqat 'GROUP BY' dan so'ng yoziladi.",
          snippet: "",
          fix: isEn 
            ? "Reorder: ... GROUP BY ... HAVING ...;"
            : "Tartibni to'g'rilang: ... GROUP BY ... HAVING ...;"
        });
      }

      // Check required patterns from question
      if (question.requiredPatterns && Array.isArray(question.requiredPatterns)) {
        question.requiredPatterns.forEach(pat => {
          let matched = false;
          let patLabel = "";
          if (pat instanceof RegExp) {
            matched = pat.test(cleanText) || pat.test(normClean);
            patLabel = pat.toString().replace(/[\/\\]/g, '');
          } else if (Array.isArray(pat)) {
            matched = pat.some(sub => sub instanceof RegExp ? sub.test(cleanText) : normClean.includes(sub.toLowerCase()));
            patLabel = pat.join(' | ');
          } else {
            matched = normClean.includes(String(pat).toLowerCase());
            patLabel = String(pat);
          }

          if (!matched) {
            errors.push({
              line: 1,
              message: isEn 
                ? `Required SQL pattern/condition '${patLabel}' is missing.`
                : `Masala shartida talab qilingan '${patLabel}' operatori yoki sharti topilmadi.`,
              snippet: "",
              fix: isEn 
                ? `Incorporate '${patLabel}' into your query.`
                : `So'rovingizga '${patLabel}' operatorini qo'shing.`
            });
          } else {
            passedItems.push({ name: isEn ? "Requirement" : "Talab", detail: patLabel });
          }
        });
      }
    },

    // Format human-readable high-contrast report (plaintext)
    formatReport(res, isEn) {
      let report = "==================================================\n";
      report += isEn 
        ? "🔎 SQL SYNTAX & COMPILATION DIAGNOSTICS (PROFESSOR ATLAS)\n"
        : "🔎 SQL SINTAKSIS VA KOMPILYATSIYA DIAGNOSTIKASI (PROFESSOR ATLAS)\n";
      report += "==================================================\n\n";

      if (res.passed) {
        report += isEn 
          ? "🎉 CONGRATULATIONS! ALL REQUIREMENTS SATISFIED!\n\n"
          : "🎉 TABRIKLAYMIZ! BARCHA TALABLAR TO'G'RI BAJARILDI!\n\n";
        report += isEn 
          ? "✔️ SQL syntax, semicolons (;), parentheses (()), and keywords verified\n"
          : "✔️ SQL sintaksisi, nuqta-vergul (;), qavslar (()) va kalit so'zlar to'liq to'g'ri\n";
        report += isEn 
          ? "✔️ Relational constraints and schema requirements verified\n"
          : "✔️ Relyatsion cheklovlar va jadval talablari qanoatlantirildi\n";
        report += isEn 
          ? "⭐ +XP Points added to your rating!\n"
          : "⭐ Reytingingizga ballar qo'shildi!\n";
      } else {
        report += isEn 
          ? "❌ ERRORS DETECTED IN YOUR SQL COMMAND:\n"
          : "❌ KODDA ANIQ XATOLIKLAR ANIQLANDI:\n";

        res.errors.forEach(err => {
          const linePrefix = err.line ? `📍 [${err.line}-Qator]: ` : "📍 ";
          report += `\n${linePrefix}${err.message}\n`;
          if (err.snippet) {
            report += `   ${isEn ? 'Your code' : 'Kodingiz'}: "${err.snippet}"\n`;
          }
          if (err.fix) {
            report += `   💡 ${isEn ? 'Fix Recommendation' : 'Tavsiya'}: ${err.fix}\n`;
          }
        });

        if (res.passedItems && res.passedItems.length > 0) {
          report += "\n--------------------------------------------------\n";
          report += isEn ? "✔️ CORRECTLY WRITTEN ELEMENTS:\n" : "✔️ TO'G'RI BAJARILGAN QISMLAR:\n";
          res.passedItems.forEach(item => {
            report += `   • ${item.name} (${item.detail})\n`;
          });
        }

        report += "\n💡 " + (isEn 
          ? "Professor Atlas's Advice: Fix the exact lines indicated above and test again!"
          : "Professor Atlas Maslahati: Yuqorida ko'rsatilgan aniq qatorlardagi xatoliklarni tuzatib, qayta tekshiring!");
      }

      return report;
    },

    // HTML escape utility
    escapeHTML(str) {
      if (!str) return "";
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    },

    // Format HTML report with high visual contrast for bottom console / feedback box
    formatReportHTML(res, isEn) {
      if (res.passed) {
        return `
          <div style="background:rgba(34,197,94,0.1); border:1px solid rgba(34,197,94,0.3); border-radius:6px; padding:10px 14px; color:#bbf7d0; font-family:var(--font-mono, monospace); font-size:12.5px; line-height:1.5;">
            <div style="font-weight:700; color:#4ade80; display:flex; align-items:center; gap:8px; margin-bottom:4px;">
              <span>✓</span> <span>${isEn ? "ALL SYNTAX & STRUCTURAL CHECKS PASSED!" : "BARCHA SINTAKSIS VA STRUKTURAVIY TEKSHIRUVLARDAN O'TDI!"}</span>
            </div>
            <div style="color:#86efac; font-size:12px;">
              ${isEn ? "SQL syntax, semicolons (;), parentheses (()) and keywords are verified." : "SQL sintaksisi, nuqta-vergul (;), qavslar (()) va kalit so'zlar to'liq to'g'ri yozilgan."}
            </div>
          </div>
        `;
      }

      let html = `<div style="display:flex; flex-direction:column; gap:8px; font-family:var(--font-mono, monospace); font-size:12px; line-height:1.45;">`;

      html += `
        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-weight:700; color:#f87171; border-bottom:1px solid rgba(239,68,68,0.25); padding-bottom:6px;">
          <div style="display:flex; align-items:center; gap:6px;">
            <span style="background:rgba(239,68,68,0.2); border:1px solid #ef4444; color:#fca5a5; padding:2px 7px; border-radius:4px; font-size:11px;">
              ❌ ${isEn ? "SYNTAX & COMPILATION ERROR" : "SINTAKSIS VA KOMPILYATSIYA XATOSI"}
            </span>
            <span style="font-size:12px; color:#fecaca;">${isEn ? "Professor Atlas Pinpoint Diagnostics" : "Professor Atlas Aniq Diagnostikasi"}</span>
          </div>
          <span style="font-size:11px; opacity:0.8; color:#cbd5e1;">${res.errors.length} ta xatolik</span>
        </div>
      `;

      res.errors.forEach((err) => {
        const lineText = err.line ? `<strong style="color:#f87171;">(${isEn ? `Line ${err.line}` : `${err.line}-qator`})</strong> ` : "";

        html += `
          <div style="background:rgba(0,0,0,0.32); border:1px solid rgba(239,68,68,0.25); border-left:3px solid #ef4444; border-radius:4px; padding:7px 10px;">
            <div style="color:#fecaca; font-weight:600; margin-bottom:4px;">
              ${lineText}${this.escapeHTML(err.message)}
            </div>
            ${err.snippet ? `<div style="background:rgba(15,23,42,0.85); border:1px solid rgba(255,255,255,0.08); border-radius:3px; padding:4px 8px; color:#f1f5f9; font-size:11.5px; margin-bottom:4px; overflow-x:auto;"><code>${this.escapeHTML(err.snippet)}</code></div>` : ""}
            ${err.fix ? `<div style="color:#fde047; font-size:11.5px; display:flex; align-items:flex-start; gap:5px;"><span>💡</span><span><strong>${isEn ? "Fix tip" : "Tuzatish tavsiyasi"}:</strong> ${this.escapeHTML(err.fix)}</span></div>` : ""}
          </div>
        `;
      });

      if (res.passedItems && res.passedItems.length > 0) {
        html += `
          <div style="background:rgba(34,197,94,0.08); border:1px solid rgba(34,197,94,0.2); border-radius:4px; padding:6px 10px; color:#86efac; font-size:11.5px;">
            <div style="font-weight:600; color:#4ade80; margin-bottom:3px;">${isEn ? "✔️ Correct elements:" : "✔️ To'g'ri bajarilgan qismlar:"}</div>
            <div style="display:flex; flex-wrap:wrap; gap:6px;">
              ${res.passedItems.map(it => `<span style="background:rgba(34,197,94,0.15); padding:1px 6px; border-radius:3px;">${this.escapeHTML(it.name)}: ${this.escapeHTML(it.detail)}</span>`).join('')}
            </div>
          </div>
        `;
      }

      html += `</div>`;
      return html;
    }
  };

  if (typeof window !== 'undefined') {
    window.DatabaseSQLDiagnostics = DatabaseSQLDiagnostics;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DatabaseSQLDiagnostics;
  }
})();
