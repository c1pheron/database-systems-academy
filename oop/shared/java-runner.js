// ============================================================================
// OOP ACADEMY — REAL OPENJDK 21 CLOUD & CLIENT-SIDE TEST ENGINE
// Wandbox OpenJDK 21 API + Client-side AST & Validation Engine
// ============================================================================

(function (global) {
  "use strict";

  const JavaRunner = {
    // 1. Format code into compilable Java class for Wandbox
    prepareCodeForCompilation(rawCode) {
      let code = rawCode.trim();

      // Wandbox expects class Prog or non-public main class unless named file
      // If student wrote "public class X", replace with "class X" so it compiles in prog.java
      code = code.replace(/public\s+class\s+([A-Za-z0-9_]+)/g, 'class $1');

      // If code doesn't contain a main method, add a launcher class Prog with main
      if (!code.includes("public static void main")) {
        code += `\n\nclass Prog {\n    public static void main(String[] args) {\n        System.out.println("✅ Java sintaksisi va klasslar muvaffaqiyatli kompilyatsiya qilindi!");\n    }\n}`;
      } else {
        // Ensure the class with main is named Prog if not already
        if (!code.includes("class Prog")) {
          // Find the class that has main and rename or alias it, or wrap
          code = code.replace(/class\s+([A-Za-z0-9_]+)(\s*\{[\s\S]*?public\s+static\s+void\s+main)/m, 'class Prog$2');
        }
      }

      return code;
    },

    // 2. Real Cloud OpenJDK 21 execution via Wandbox
    async runOnOpenJDK21(rawCode) {
      const compilableCode = this.prepareCodeForCompilation(rawCode);

      try {
        const response = await fetch("https://wandbox.org/api/compile.json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            compiler: "openjdk-jdk-21+35",
            code: compilableCode
          })
        });

        if (!response.ok) {
          throw new Error(`Kompilyator serveri javob bermadi (HTTP ${response.status})`);
        }

        const data = await response.json();
        
        const isSuccess = data.status === "0";
        const output = data.program_output || data.program_message || "";
        const errors = data.compiler_error || data.compiler_message || data.program_error || "";

        return {
          success: isSuccess,
          output: output.trim(),
          errors: errors.trim(),
          raw: data
        };
      } catch (err) {
        console.warn("Wandbox fetch error, fallback to client-side evaluation:", err);
        return {
          success: false,
          output: "",
          errors: `Internet yoki Cloud aloqa xatosi: ${err.message}. Iltimos, lokal tekshiruvdan foydalaning.`,
          networkError: true
        };
      }
    },

    // 3. Client-side Fast Structural & OOP Rules Validator
    validateOOPRules(code, requirements = {}) {
      const results = {
        passed: true,
        tests: []
      };

      // Check required classes
      if (requirements.classes) {
        for (const cls of requirements.classes) {
          const regex = new RegExp(`(class|interface)\\s+${cls}\\b`);
          const hasCls = regex.test(code);
          results.tests.push({
            name: `${cls} sinfi/interfeysi e'lon qilingan`,
            passed: hasCls,
            feedback: hasCls ? "Ajoyib!" : `'${cls}' sinfi topilmadi. Sintaksis: 'class ${cls} { ... }'`
          });
          if (!hasCls) results.passed = false;
        }
      }

      // Check fields & Encapsulation
      if (requirements.privateFields) {
        for (const field of requirements.privateFields) {
          const regex = new RegExp(`private\\s+([A-Za-z0-9_<>\\[\\]]+)\\s+${field}\\b`);
          const hasField = regex.test(code);
          results.tests.push({
            name: `'${field}' maydoni 'private' bilan inkapsulyatsiya qilingan`,
            passed: hasField,
            feedback: hasField ? "Inkapsulyatsiya saqlandi!" : `'${field}' maydoni 'private' deb belgilanmagan. Inkapsulyatsiya buzildi!`
          });
          if (!hasField) results.passed = false;
        }
      }

      // Check methods
      if (requirements.methods) {
        for (const m of requirements.methods) {
          const regex = new RegExp(`\\b${m}\\s*\\(`);
          const hasMethod = regex.test(code);
          results.tests.push({
            name: `'${m}(...)' metodi yaratilgan`,
            passed: hasMethod,
            feedback: hasMethod ? "Metod mavjud!" : `'${m}' metodi topilmadi.`
          });
          if (!hasMethod) results.passed = false;
        }
      }

      // Check keywords (e.g. extends, implements, super, @Override, this)
      if (requirements.keywords) {
        for (const kw of requirements.keywords) {
          const regex = new RegExp(`\\b${kw.replace("@", "\\@")}\\b`);
          const hasKw = regex.test(code);
          results.tests.push({
            name: `'${kw}' kalit so'zi qo'llangan`,
            passed: hasKw,
            feedback: hasKw ? "To'g'ri qo'llandi!" : `'${kw}' kalit so'zidan foydalanilmadi.`
          });
          if (!hasKw) results.passed = false;
        }
      }

      // Check constructors
      if (requirements.constructors) {
        for (const c of requirements.constructors) {
          const regex = new RegExp(`(public|protected|private)?\\s*${c}\\s*\\([^)]*\\)`);
          const hasCtor = regex.test(code);
          results.tests.push({
            name: `'${c}' konstruktori mavjud`,
            passed: hasCtor,
            feedback: hasCtor ? "Konstruktor to'g'ri tuzilgan!" : `'${c}' sinfi uchun konstruktor topilmadi.`
          });
          if (!hasCtor) results.passed = false;
        }
      }

      return results;
    }
  };

  global.JavaRunner = JavaRunner;
})(typeof window !== "undefined" ? window : global);
