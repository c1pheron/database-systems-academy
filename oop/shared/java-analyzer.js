// ============================================================================
// OOP ACADEMY — INTELLIGENT JAVA SYNTAX & SEMANTIC ANALYZER (PROFESSOR ADA)
// Line-by-line linting, exact error pinpoints, diagnostic hints, and javac error parser.
// Solves: "kod yozganda qayerda xato qilayotganimni aytadigan bo'lsin"
// ============================================================================

(function (global) {
  "use strict";

  const JavaAnalyzer = {
    // 1. Line-by-Line Syntax & Linter Verification
    lintSyntax(rawCode) {
      const lines = rawCode.split("\n");
      const errors = [];
      const warnings = [];

      let inBlockComment = false;
      const braceStack = []; // stores { char, line, col }
      const parenStack = []; // stores (

      for (let i = 0; i < lines.length; i++) {
        const lineNum = i + 1;
        let line = lines[i];

        // Handle block comments /* ... */
        if (inBlockComment) {
          const endIdx = line.indexOf("*/");
          if (endIdx !== -1) {
            inBlockComment = false;
            line = line.substring(endIdx + 2);
          } else {
            continue;
          }
        }

        const startCommentIdx = line.indexOf("/*");
        if (startCommentIdx !== -1) {
          const endCommentIdx = line.indexOf("*/", startCommentIdx + 2);
          if (endCommentIdx === -1) {
            inBlockComment = true;
            line = line.substring(0, startCommentIdx);
          } else {
            line = line.substring(0, startCommentIdx) + " " + line.substring(endCommentIdx + 2);
          }
        }

        // Strip single line comments //
        const singleCommentIdx = line.indexOf("//");
        if (singleCommentIdx !== -1) {
          line = line.substring(0, singleCommentIdx);
        }

        const trimmed = line.trim();
        if (!trimmed) continue;

        // A. Check unclosed string literals
        let inString = false;
        let inChar = false;
        for (let c = 0; c < line.length; c++) {
          const ch = line[c];
          const prev = c > 0 ? line[c - 1] : "";

          if (ch === '"' && prev !== "\\" && !inChar) {
            inString = !inString;
          } else if (ch === "'" && prev !== "\\" && !inString) {
            inChar = !inChar;
          } else if (!inString && !inChar) {
            if (ch === "{") braceStack.push({ line: lineNum, col: c + 1 });
            else if (ch === "}") {
              if (braceStack.length === 0) {
                errors.push({
                  line: lineNum,
                  type: "extra_brace",
                  message: `Ortiqcha '}' qavs yozilgan — uni ochgan tegishli '{' bloki mavjud emas!`,
                  fix: `Ushbu qatordagi '}' qavsni olib tashlang yoki ochilgan blokni tekshiring.`
                });
              } else {
                braceStack.pop();
              }
            } else if (ch === "(") parenStack.push({ line: lineNum, col: c + 1 });
            else if (ch === ")") {
              if (parenStack.length === 0) {
                errors.push({
                  line: lineNum,
                  type: "extra_paren",
                  message: `Ortiqcha ')' qavs yozilgan — uni ochgan '(' qavs yo'q!`,
                  fix: `Qavslar juftligini tekshiring.`
                });
              } else {
                parenStack.pop();
              }
            }
          }
        }

        if (inString) {
          errors.push({
            line: lineNum,
            type: "unclosed_string",
            message: `Matnli satr (String) tirnoqlari ochilgan, lekin yopilmagan!`,
            snippet: trimmed,
            fix: `Satr oxiriga qo'shtirnoq '"' qo'yishni unutmang.`
          });
        }

        // B. Check missing semicolon ';' on statement lines
        // Ignore lines ending with { or }, or starting with keywords like if, for, while, else, class, interface, enum, annotations @
        const isHeader = /^(class|interface|enum|abstract\s+class|public\s+class|public\s+interface|static|if|else|for|while|switch|try|catch|finally|synchronized|default)\b/.test(trimmed);
        const isAnnotation = trimmed.startsWith("@");
        const endsWithValid = /([{};,]|\+|&&|\|\||\-|\*|\/)$/.test(trimmed);

        if (!isHeader && !isAnnotation && !endsWithValid) {
          // If it looks like a variable declaration, assignment, method call, or return
          const isStatement = /^(return|this\.|super\.|System\.out\.|throw\s|import\s|package\s|[A-Za-z0-9_<>\[\]]+\s+[A-Za-z0-9_]+\s*(=|;|\())/.test(trimmed);
          if (isStatement) {
            errors.push({
              line: lineNum,
              type: "missing_semicolon",
              message: `Sintaksis xatosi: Qator oxirida nuqta-vergul ';' qolib ketgan!`,
              snippet: trimmed,
              fix: `Qator oxiriga ';' qo'ying: '${trimmed};'`
            });
          }
        }
      }

      // Check remaining unclosed braces
      if (braceStack.length > 0) {
        const last = braceStack[braceStack.length - 1];
        errors.push({
          line: last.line,
          type: "unclosed_brace",
          message: `Ochilgan '{' jingalak qavs yopilmagan! Klass yoki metod tanasi oxirida '}' qo'yilishi shart.`,
          fix: `Fayl oxirida yoki tegishli blok so'ngida '}' qo'yib blokni yoping.`
        });
      }

      // Check remaining unclosed parens
      if (parenStack.length > 0) {
        const last = parenStack[parenStack.length - 1];
        errors.push({
          line: last.line,
          type: "unclosed_paren",
          message: `Ochilgan '(' dumaloq qavs yopilmagan!`,
          fix: `Ifoda yoki metod parametrlari so'ngida ')' qo'ying.`
        });
      }

      return {
        hasErrors: errors.length > 0,
        errors,
        warnings
      };
    },

    // 2. Deep Semantic Requirements Verification (Checks fields, types, modifiers, line numbers)
    analyzeRequirements(rawCode, requirements = {}) {
      const issues = [];
      const passedItems = [];
      const lines = rawCode.split("\n");

      // Helper to find line number of a pattern
      function findLineNumber(regex) {
        for (let i = 0; i < lines.length; i++) {
          if (regex.test(lines[i])) return i + 1;
        }
        return null;
      }

      // 1. Check Classes & Interfaces
      if (requirements.classes) {
        for (const cls of requirements.classes) {
          const clsRegex = new RegExp(`\\b(class|interface)\\s+${cls}\\b`);
          const lineNum = findLineNumber(clsRegex);

          if (lineNum) {
            passedItems.push({
              name: `'${cls}' klassi/interfeysi`,
              detail: `${lineNum}-qatorda to'g'ri e'lon qilingan.`
            });
          } else {
            // Check if student misspelled it
            let typoLine = null;
            let typoName = null;
            for (let i = 0; i < lines.length; i++) {
              const m = lines[i].match(/\b(class|interface)\s+([A-Za-z0-9_]+)\b/);
              if (m && m[2] !== "Main" && m[2] !== cls) {
                // Check similarity
                if (m[2].toLowerCase().includes(cls.toLowerCase().substring(0, 3))) {
                  typoLine = i + 1;
                  typoName = m[2];
                  break;
                }
              }
            }

            if (typoLine) {
              issues.push({
                line: typoLine,
                title: `'${cls}' klassi nomlanishi xato`,
                message: `${typoLine}-qatorda '${typoName}' deb yozilgan, lekin talabda klass nomi qat'iy '${cls}' bo'lishi kerak!`,
                fix: `'class ${cls} { ... }' ko'rinishida to'g'rilang.`
              });
            } else {
              issues.push({
                line: null,
                title: `'${cls}' klassi topilmadi`,
                message: `Dasturda '${cls}' klassi e'lon qilinmagan.`,
                fix: `'class ${cls} {\n    // maydonlar va metodlar\n}' deb yozing.`
              });
            }
          }
        }
      }

      // 2. Check Specific Fields with Types
      if (requirements.fields) {
        for (const reqField of requirements.fields) {
          // reqField can be { name: "price", type: "double", class: "Product" }
          const fieldName = reqField.name;
          const expectedType = reqField.type;
          
          // Regex to locate the field declaration on any line
          const fieldDeclRegex = new RegExp(`\\b(?:(?:public|private|protected|final|static|volatile)\\s+)*([A-Za-z0-9_<>\\[\\]]+)\\s+${fieldName}\\s*(?:=[^;]+)?\\s*;`);
          let found = false;

          for (let i = 0; i < lines.length; i++) {
            const m = lines[i].match(fieldDeclRegex);
            if (m) {
              found = true;
              const actualType = m[1];
              const lineNum = i + 1;

              if (expectedType && actualType !== expectedType) {
                issues.push({
                  line: lineNum,
                  title: `'${fieldName}' maydoni turi noto'g'ri`,
                  message: `${lineNum}-qatorda '${fieldName}' maydoni turi '${expectedType}' bo'lishi kerak edi, siz esa '${actualType}' deb yozgansiz!`,
                  fix: `'${expectedType} ${fieldName};' deb o'zgartiring.`
                });
              } else {
                passedItems.push({
                  name: `'${fieldName}' (${expectedType || actualType}) maydoni`,
                  detail: `${lineNum}-qatorda to'g'ri turda e'lon qilingan.`
                });
              }
              break;
            }
          }

          if (!found) {
            issues.push({
              line: null,
              title: `'${fieldName}' maydoni yetishmayapti`,
              message: `'${fieldName}' nomli maydon topilmadi. Talab qilingan tur: '${expectedType || "mos tur"}'.`,
              fix: `'${expectedType ? expectedType + " " : ""}${fieldName};' ko'rinishida klass ichiga qo'shing.`
            });
          }
        }
      }

      // 3. Check Encapsulation & Private Fields
      if (requirements.privateFields) {
        for (const field of requirements.privateFields) {
          const privRegex = new RegExp(`\\bprivate\\s+(?:(?:final|static|volatile)\\s+)*([A-Za-z0-9_<>\\[\\]]+)\\s+${field}\\b`);
          const lineNum = findLineNumber(privRegex);

          if (lineNum) {
            passedItems.push({
              name: `'${field}' maydoni inkapsulyatsiyasi`,
              detail: `${lineNum}-qatorda 'private' bilan to'g'ri himoyalangan.`
            });
          } else {
            // Find where this field was declared as public or default
            const openFieldRegex = new RegExp(`\\b(public|protected)?\\s*(?:(?:final|static|volatile)\\s+)*([A-Za-z0-9_<>\\[\\]]+)\\s+${field}\\b`);
            const openLine = findLineNumber(openFieldRegex);

            if (openLine) {
              issues.push({
                line: openLine,
                title: `Inkapsulyatsiya buzilgan: '${field}' maydoni ochiq`,
                message: `${openLine}-qatorda '${field}' maydoni 'private' deb belgilanmagan! OOP qoidasiga ko'ra to'g'ridan-to'g'ri kirish cheklanishi shart.`,
                fix: `Maydon oldiga 'private' qo'shing: 'private ... ${field};'`
              });
            } else {
              issues.push({
                line: null,
                title: `'${field}' maydoni topilmadi`,
                message: `Klass ichida 'private' bo'lgan '${field}' maydoni e'lon qilinmagan.`,
                fix: `'private <turi> ${field};' deb yozing.`
              });
            }
          }
        }
      }

      // 4. Check Methods & Getters/Setters
      if (requirements.methods) {
        for (const m of requirements.methods) {
          const methodRegex = new RegExp(`\\b${m}\\s*\\(`);
          const lineNum = findLineNumber(methodRegex);

          if (lineNum) {
            passedItems.push({
              name: `'${m}()' metodi`,
              detail: `${lineNum}-qatorda to'g'ri yaratilgan.`
            });
          } else {
            issues.push({
              line: null,
              title: `'${m}()' metodi yetishmayapti`,
              message: `'${m}' nomli metod topilmadi. Talab qilingan metodni yaratish zarur.`,
              fix: `Metod sarlavhasi va tanasini qo'shing: 'public ... ${m}(...) { ... }'`
            });
          }
        }
      }

      // 5. Check Constructors
      if (requirements.constructors) {
        for (const c of requirements.constructors) {
          const ctorRegex = new RegExp(`\\b(public|protected|private)?\\s*${c}\\s*\\([^)]*\\)\\s*\\{`);
          const lineNum = findLineNumber(ctorRegex);

          if (lineNum) {
            passedItems.push({
              name: `'${c}' konstruktori`,
              detail: `${lineNum}-qatorda to'g'ri shakllantirilgan.`
            });
          } else {
            issues.push({
              line: null,
              title: `'${c}' konstruktori topilmadi`,
              message: `'${c}' klassi uchun parametrli konstruktor yaratilmagan. Konstruktor nomi klass nomi bilan bir xil bo'lishi va qaytarish turiga ega bo'lmasligi kerak!`,
              fix: `'public ${c}(...) { this.... = ...; }' ko'rinishida yozing.`
            });
          }
        }
      }

      // 6. Check Specific OOP Keywords (extends, implements, super, @Override, this, etc.)
      if (requirements.keywords) {
        for (const kw of requirements.keywords) {
          const kwRegex = new RegExp(`\\b${kw.replace("@", "\\@")}\\b`);
          const lineNum = findLineNumber(kwRegex);

          if (lineNum) {
            passedItems.push({
              name: `'${kw}' kalit so'zi`,
              detail: `${lineNum}-qatorda to'g'ri qo'llangan.`
            });
          } else {
            issues.push({
              line: null,
              title: `'${kw}' kalit so'zi unutilgan`,
              message: `Mavzuni to'liq o'zlashtirish uchun '${kw}' kalit so'zidan foydalanish talab qilinadi.`,
              fix: `'${kw}' kalit so'zini tegishli o'rinda qo'llang.`
            });
          }
        }
      }

      return {
        passed: issues.length === 0,
        issues,
        passedItems
      };
    },

    // 3. Compiler Error Diagnostics (Translates raw javac errors to friendly Uzbek tips)
    formatCompilerDiagnostics(rawError) {
      if (!rawError) return [];
      const lines = rawError.split("\n");
      const diagnosed = [];

      for (const line of lines) {
        const match = line.match(/(?:prog\.java|Main\.java):(\d+):\s*error:\s*(.*)/i);
        if (match) {
          const lineNum = parseInt(match[1], 10);
          const rawMsg = match[2].trim();
          let uzMessage = rawMsg;
          let tip = "";

          if (rawMsg.includes("';' expected")) {
            uzMessage = "Nuqta-vergul ';' kutilmoqda. Qator oxirida ';' qo'yish unutilgan.";
            tip = "Ushbu qator oxiriga ';' belgisini qo'shing.";
          } else if (rawMsg.includes("'}' expected")) {
            uzMessage = "Yopuvchi '}' qavs kutilmoqda. Blok to'liq yopilmagan.";
            tip = "Klass yoki metod tanasini '}' bilan yoping.";
          } else if (rawMsg.includes("cannot find symbol")) {
            uzMessage = "Noma'lum nom (o'zgaruvchi, metod yoki klass topilmadi).";
            tip = "Harflar katta-kichikligini (Case sensitivity) va nom to'g'ri e'lon qilinganini tekshiring.";
          } else if (rawMsg.includes("incompatible types")) {
            uzMessage = "Turlar mos emas (Incompatible types). Boshqa turdagi ma'lumot yuklanmoqda.";
            tip = "O'zgaruvchi turini qiymat turiga moslang (masalan, double ga matn berib bo'lmaydi).";
          } else if (rawMsg.includes("is public, should be declared in a file named")) {
            uzMessage = "Klass 'public class' deb e'lon qilingan.";
            tip = "'public class' o'rniga oddiy 'class' deb yozing (masalan: 'class Product').";
          } else if (rawMsg.includes("missing return statement")) {
            uzMessage = "Metod qiymat qaytarishi kerak, lekin 'return' buyrug'i unutilgan.";
            tip = "Metod oxiriga 'return natija;' qo'shing.";
          } else if (rawMsg.includes("unreachable statement")) {
            uzMessage = "Bajarilmaydigan kod (return dan keyin kod yozilgan).";
            tip = "'return' dan keyingi ortiqcha kodlarni olib tashlang.";
          } else if (rawMsg.includes("constructor") && rawMsg.includes("cannot be applied")) {
            uzMessage = "Konstruktorga uzatilgan argumentlar mos emas.";
            tip = "Konstruktor parametrlarining soni va turlarini tekshiring.";
          }

          diagnosed.push({
            line: lineNum,
            original: rawMsg,
            uzbek: uzMessage,
            tip: tip
          });
        }
      }

      return diagnosed;
    }
  };

  global.JavaAnalyzer = JavaAnalyzer;
})(typeof window !== "undefined" ? window : global);
