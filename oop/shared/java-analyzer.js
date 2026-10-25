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
            if (ch === "{") {
              const beforeBrace = line.substring(0, c).trim();
              const isArrayInit = /(=|\[\]|\{|\,)\s*$/.test(beforeBrace) || (beforeBrace === "" && i > 0 && /(=|\[\]|\{|\,)\s*$/.test(lines[i - 1].trim()));
              braceStack.push({ line: lineNum, col: c + 1, isArrayInit });
            } else if (ch === "}") {
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
        // Also ignore if inside unclosed parenthesis (parenStack.length > 0) e.g. multiline System.out.println(...)
        const isHeader = /^(class|interface|enum|abstract\s+class|public\s+class|public\s+interface|static|if|else|for|while|switch|try|catch|finally|synchronized|default)\b/.test(trimmed);
        const isAnnotation = trimmed.startsWith("@");
        const endsWithValid = /([{};,(\[.]|\+|&&|\|\||\-|\*|\/|=|\?|:)$/.test(trimmed);

        const currentBrace = braceStack.length > 0 ? braceStack[braceStack.length - 1] : null;
        const isInsideArrayInit = currentBrace && currentBrace.isArrayInit;

        if (parenStack.length === 0 && !isInsideArrayInit && !isHeader && !isAnnotation && !endsWithValid) {
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

    // 2. Deep Semantic Requirements & Completion Verification (Checks fields, types, modifiers, instantiations, usage, calculations)
    analyzeRequirements(rawCode, requirements = {}, challenge = null) {
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

      // Helper to strip comments and string literals for accurate symbol counting
      function cleanJavaCode(code) {
        return code
          .replace(/\/\/.*$/gm, "")
          .replace(/\/\*[\s\S]*?\*\//g, "")
          .replace(/"(?:[^"\\]|\\.)*"/g, '""');
      }

      function getMainBody(code) {
        const start = code.search(/public\s+static\s+void\s+main\b/);
        if (start === -1) return null;
        const openBrace = code.indexOf("{", start);
        if (openBrace === -1) return null;
        let depth = 1, idx = openBrace + 1;
        while (idx < code.length && depth > 0) {
          if (code[idx] === "{") depth++;
          else if (code[idx] === "}") depth--;
          idx++;
        }
        return code.substring(openBrace + 1, idx - 1);
      }

      const cleanCode = cleanJavaCode(rawCode);

      // 1. Check Classes & Interfaces
      if (requirements.classes) {
        for (const cls of requirements.classes) {
          const clsRegex = new RegExp(`\\b(class|interface|enum|record)\\s+${cls}\\b`);
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
              const m = lines[i].match(/\b(class|interface|enum|record)\s+([A-Za-z0-9_]+)\b/);
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

      // 2. Check Specific Fields with Types and Actual Usage
      if (requirements.fields) {
        for (const reqField of requirements.fields) {
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
              message: `'${fieldName}' nomli maydon klass ichida topilmadi. Talab qilingan tur: '${expectedType || "mos tur"}'.`,
              fix: `'${expectedType ? expectedType + " " : ""}${fieldName};' ko'rinishida klass ichiga qo'shing.`
            });
          } else {
            // Check if field is actually used / assigned
            const occurrences = (cleanCode.match(new RegExp(`\\b${fieldName}\\b`, "g")) || []).length;
            if (occurrences < 2) {
              issues.push({
                line: findLineNumber(new RegExp(`\\b${fieldName}\\b`)),
                title: `'${fieldName}' maydoniga qiymat berilmagan`,
                message: `'${fieldName}' maydoni klassda e'lon qilingan, lekin unga qiymat berilmagan yoki dasturda ishlatilmagan! Ob'yekt orqali unga qiymat yuklang yoki hisob-kitobda qo'llang.`,
                fix: `'obj.${fieldName} = ...;' (yoki konstruktor/setter orqali) qiymat yuklang.`
              });
            } else {
              passedItems.push({
                name: `'${fieldName}' maydoni ishlatildi`,
                detail: "Maydonga qiymat berildi va masalada foydalanildi."
              });
            }
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

      // 4. Check Methods & Invocations
      if (requirements.methods) {
        for (const m of requirements.methods) {
          const methodRegex = new RegExp(`\\b${m}\\s*\\(`);
          const lineNum = findLineNumber(methodRegex);

          if (lineNum) {
            passedItems.push({
              name: `'${m}()' metodi`,
              detail: `${lineNum}-qatorda to'g'ri yaratilgan.`
            });

            // Check if method is invoked in main (if challenge solution invokes it)
            if (challenge && challenge.solution && new RegExp(`\\.${m}\\s*\\(`).test(challenge.solution)) {
              if (!new RegExp(`\\.${m}\\s*\\(`).test(cleanCode)) {
                issues.push({
                  line: lineNum,
                  title: `'${m}()' metodi chaqirilmagan`,
                  message: `'${m}()' metodi e'lon qilingan, lekin 'main' metodida chaqirib natijasi tekshirilmagan! Ob'yekt orqali metodni ishga tushiring.`,
                  fix: `'obj.${m}(...);' ko'rinishida metodni chaqiring.`
                });
              } else {
                passedItems.push({
                  name: `'${m}()' metodi chaqirildi`,
                  detail: "Metod ob'yekt orqali to'g'ri ishlatildi."
                });
              }
            }
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

      // 6. Check Specific OOP Keywords
      if (requirements.keywords) {
        for (const kw of requirements.keywords) {
          let lineNum = null;
          // First check plain substring match line by line
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes(kw)) {
              lineNum = i + 1;
              break;
            }
          }
          if (!lineNum) {
            try {
              const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
              const kwRegex = new RegExp(`\\b${escaped}\\b`);
              lineNum = findLineNumber(kwRegex);
            } catch (e) {
              // Fallback silently if regex fails
            }
          }

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

      // 7. Check 'main' Method Existence & Non-Empty Implementation
      const hasMainReq = (requirements.classes || []).includes("Main") ||
        (challenge && challenge.solution && challenge.solution.includes("public static void main"));
      if (hasMainReq) {
        const mainBody = getMainBody(cleanCode);
        if (mainBody === null) {
          issues.push({
            line: null,
            title: "'main' metodi topilmadi",
            message: "Dasturni ishga tushirish uchun 'public static void main(String[] args)' metodi e'lon qilinishi shart!",
            fix: "'public static void main(String[] args) { ... }' metodini Main klassi ichiga qo'shing."
          });
        } else {
          const stripped = mainBody.replace(/\s+/g, "");
          if (stripped.length === 0) {
            issues.push({
              line: findLineNumber(/public\s+static\s+void\s+main/),
              title: "'main' metodi bo'sh",
              message: "'main' metodi ichida hech qanday amal yozilmagan! Masala shartida talab qilingan ob'yekt yaratish, maydonlarga qiymat berish va natijani ekranga chiqarish amallarini 'main' ichida yozing.",
              fix: "'main' metodida topshiriq shartlarini yakunlang."
            });
          } else {
            passedItems.push({
              name: "'main' ijro metodi",
              detail: "Bajariluvchi dastur logikasi mavjud."
            });
          }
        }
      }

      // 8. Domain Classes Instantiation Check ('new ClassName')
      if (requirements.classes && challenge && challenge.solution) {
        for (const cls of requirements.classes) {
          if (cls === "Main") continue;
          if (new RegExp(`\\bnew\\s+${cls}\\b`).test(challenge.solution)) {
            if (!new RegExp(`\\bnew\\s+${cls}\\b`).test(cleanCode)) {
              issues.push({
                line: findLineNumber(/public\s+static\s+void\s+main/) || null,
                title: `'${cls}' ob'yekti yaratilmagan`,
                message: `'main' metodi ichida '${cls}' klassidan 'new ${cls}(...)' orqali yangi ob'yekt (nusxa) yaratilishi shart!`,
                fix: `'${cls} obj = new ${cls}(...);' ko'rinishida ob'yekt yarating.`
              });
            } else {
              passedItems.push({
                name: `'${cls}' ob'yekti yaratildi`,
                detail: `'new ${cls}(...)' orqali muvaffaqiyatli xotiradan joy olindi.`
              });
            }
          }
        }
      }

      // 9. Console Printing Check ('System.out.println')
      const expectsPrint = (challenge && challenge.solution && challenge.solution.includes("System.out.print")) ||
        (!challenge && true);
      if (expectsPrint) {
        if (!cleanCode.includes("System.out.print")) {
          issues.push({
            line: null,
            title: "Natija ekranga chop etilmagan",
            message: "Masala shartiga ko'ra natijalar 'System.out.println(...)' orqali ekranga chiqarilishi shart!",
            fix: "'System.out.println(...);' qo'shib hisoblangan natijani konsolga chiqaring."
          });
        } else {
          passedItems.push({
            name: "Konsolga chop etish",
            detail: "System.out.println() to'g'ri qo'llangan."
          });
        }
      }

      // 10. Core Scenario Calculations & Logic Check
      if (challenge && challenge.scenario && challenge.scenario.uz) {
        const sc = challenge.scenario.uz;
        if (sc.includes("totalRamMb - usedRamMb") && !cleanCode.includes("-")) {
          issues.push({
            line: null,
            title: "Bo'sh RAM ayirmasi hisoblanmagan",
            message: "Masala shartiga ko'ra bo'sh qolgan xotirani hisoblash ('totalRamMb - usedRamMb') ayirish '-' amali orqali bajarilishi shart!",
            fix: "'int freeRam = node.totalRamMb - node.usedRamMb;' hisob-kitobini yozing."
          });
        }
        if (sc.includes("distanceKm * ratePerKm") && !cleanCode.includes("*")) {
          issues.push({
            line: null,
            title: "Yo'l haqi hisob-kitobi bajarilmagan",
            message: "Masala shartiga ko'ra umumiy yo'l haqini hisoblash ('distanceKm * ratePerKm') ko'paytirish '*' amali orqali bajarilishi shart!",
            fix: "'double total = trip.distanceKm * trip.ratePerKm;' hisob-kitobini yozing."
          });
        }
        if (sc.includes("isCompleted == true") && !cleanCode.includes("if") && !cleanCode.includes("?")) {
          issues.push({
            line: null,
            title: "Tranzaksiya holati tekshirilmagan",
            message: "Masala shartiga ko'ra 'isCompleted' maydoni 'if' yoki '?' (ternary) orqali tekshirilishi shart!",
            fix: "'String status = tx.isCompleted ? \"Muvaffaqiyatli\" : \"Kutilmoqda\";' deb shart qo'ying."
          });
        }
        if (sc.includes("GPA ko'rsatkichini solishtirib") && !cleanCode.includes("if") && !cleanCode.includes(">") && !cleanCode.includes("<")) {
          issues.push({
            line: null,
            title: "GPA larni solishtirish sharti yozilmagan",
            message: "Masala shartiga ko'ra talabalarning GPA ko'rsatkichlari 'if' va '>' orqali solishtirilishi shart!",
            fix: "'if (s1.gpa > s2.gpa) { ... }' ko'rinishida shart yozing."
          });
        }
      }

      return {
        passed: issues.length === 0,
        issues,
        passedItems
      };
    },

    // 3. Compiler Error Diagnostics (Translates raw javac errors and JVM exceptions to friendly tips)
    formatCompilerDiagnostics(rawError) {
      if (!rawError) return [];
      const lines = rawError.split("\n");
      const diagnosed = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // 1. Match standard javac errors: prog.java:LINE: error: MESSAGE
        const javacMatch = line.match(/(?:prog\.java|Main\.java|\.java):(\d+):\s*(?:error|warning)?:\s*(.*)/i);
        if (javacMatch) {
          const lineNum = parseInt(javacMatch[1], 10);
          const rawMsg = javacMatch[2].trim();
          let uzMessage = rawMsg;
          let tip = "Qatordagi sintaksis va nomlarni tekshiring.";

          if (rawMsg.includes("';' expected")) {
            uzMessage = "Nuqta-vergul ';' kutilmoqda. Qator oxirida ';' qo'yish unutilgan.";
            tip = "Ushbu qator oxiriga ';' belgisini qo'shing.";
          } else if (rawMsg.includes("'}' expected")) {
            uzMessage = "Yopuvchi '}' jingalak qavs kutilmoqda. Blok to'liq yopilmagan.";
            tip = "Klass yoki metod tanasini '}' bilan yoping.";
          } else if (rawMsg.includes("')' expected")) {
            uzMessage = "Yopuvchi ')' qavs kutilmoqda. Qavslar juftligini tekshiring.";
            tip = "Qavsni ')' bilan yoping.";
          } else if (rawMsg.includes("cannot find symbol")) {
            let symbolInfo = "";
            for (let j = i + 1; j < Math.min(i + 4, lines.length); j++) {
              if (lines[j].includes("symbol:")) {
                symbolInfo = " (" + lines[j].trim() + ")";
                break;
              }
            }
            uzMessage = "Noma'lum nom: o'zgaruvchi, metod yoki klass topilmadi" + symbolInfo + ".";
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
            uzMessage = "Bajarilmaydigan kod (return dan keyin ortiqcha kod yozilgan).";
            tip = "'return' dan keyingi ortiqcha kodlarni olib tashlang.";
          } else if (rawMsg.includes("constructor") && rawMsg.includes("cannot be applied")) {
            uzMessage = "Konstruktorga uzatilgan argumentlar soni yoki turlari mos emas.";
            tip = "Konstruktor parametrlarining soni va turlarini tekshiring.";
          } else if (rawMsg.includes("illegal start of expression")) {
            uzMessage = "Noto'g'ri ifoda boshlanishi (Illegal start of expression).";
            tip = "Oldingi qatordagi ';' yoki qavslar to'g'ri yopilganini tekshiring.";
          } else if (rawMsg.includes("variable") && rawMsg.includes("might not have been initialized")) {
            uzMessage = "O'zgaruvchiga boshlang'ich qiymat berilmagan.";
            tip = "O'zgaruvchini ishlatishdan oldin unga boshlang'ich qiymat bering (masalan: = 0;).";
          } else if (rawMsg.includes("class, interface, enum, or record expected")) {
            uzMessage = "Klass yoki blok kutilmoqda. Qavslar noto'g'ri yopilgan yoki ortiqcha belgi bor.";
            tip = "Jingalak qavslar '{' va '}' juftligini tekshiring.";
          }

          diagnosed.push({
            line: lineNum,
            original: rawMsg,
            uzbek: uzMessage,
            tip: tip
          });
        }

        // 2. Match JVM Runtime Exceptions: at ... (prog.java:LINE)
        const traceMatch = line.match(/at\s+(?:[A-Za-z0-9_]+\.)+[A-Za-z0-9_]+\((?:prog\.java|Main\.java|\.java):(\d+)\)/i);
        if (traceMatch) {
          const lineNum = parseInt(traceMatch[1], 10);
          let excName = "Runtime Exception";
          for (let k = Math.max(0, i - 3); k <= i; k++) {
            const excMatch = lines[k].match(/Exception in thread "[^"]*"\s+([A-Za-z0-9_$.]+)(?::\s*(.*))?/i);
            if (excMatch) {
              excName = excMatch[1];
              const excDetail = excMatch[2] ? ` (${excMatch[2]})` : "";
              let tip = "Ushbu qatordagi obyekt yoki hisob-kitobni tekshiring.";
              let uzb = `Dasturni bajarishda xatolik yuz berdi: ${excName}${excDetail}`;

              if (excName.includes("NullPointerException")) {
                uzb = "NullPointerException: Bo'sh ('null') bo'lgan ob'yektga murojaat qilindi.";
                tip = "Murojaat qilishdan oldin ob'yekt 'new' orqali yaratilganiga ishonch hosil qiling.";
              } else if (excName.includes("ArithmeticException")) {
                uzb = "Arifmetik xato (ArithmeticException): Masalan, nolga bo'lish sodir bo'ldi.";
                tip = "Bo'luvchi nolga teng emasligini tekshiring.";
              } else if (excName.includes("ArrayIndexOutOfBoundsException")) {
                uzb = "Massiv chegarasidan chiqish (ArrayIndexOutOfBoundsException): Mavjud bo'lmagan indeks chaqirildi.";
                tip = "Massiv indekslari 0 dan (uzunlik - 1) gacha bo'lishini tekshiring.";
              }

              diagnosed.push({
                line: lineNum,
                original: lines[k].trim(),
                uzbek: uzb,
                tip: tip
              });
              break;
            }
          }
        }
      }

      // If no pinpoint was extracted but rawError exists, provide general diagnostic
      if (diagnosed.length === 0 && rawError.trim()) {
        diagnosed.push({
          line: null,
          original: rawError.trim(),
          uzbek: rawError.trim(),
          tip: "Kompilyator xabarini to'liq ko'rib chiqib, kodingizni tekshiring."
        });
      }

      return diagnosed;
    }
  };

  global.JavaAnalyzer = JavaAnalyzer;
})(typeof window !== "undefined" ? window : global);
