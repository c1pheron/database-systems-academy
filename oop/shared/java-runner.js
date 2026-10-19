// ============================================================================
// OOP ACADEMY — REAL OPENJDK 21 CLOUD & CLIENT-SIDE DIAGNOSTIC ENGINE
// Wandbox OpenJDK 21 API + Intelligent Line-by-Line Syntax & Semantic Diagnostics
// Solves: "kod yozganda qayerda xato qilayotganimni aytadigan bo'lsin"
// ============================================================================

(function (global) {
  "use strict";

  const JavaRunner = {
    // 1. Format code into compilable Java class for Wandbox
    prepareCodeForCompilation(rawCode) {
      let code = rawCode.trim();

      // Wandbox compiles inside prog.java. Top-level classes cannot be public unless matching file name
      code = code.replace(/\bpublic\s+class\b/g, 'class');
      code = code.replace(/\bpublic\s+interface\b/g, 'interface');
      code = code.replace(/\bpublic\s+enum\b/g, 'enum');
      code = code.replace(/\bpublic\s+record\b/g, 'record');

      // If code doesn't contain a main method, add a launcher class ProgLauncher with main
      if (!code.includes("public static void main")) {
        code += `\n\nclass ProgLauncher {\n    public static void main(String[] args) {\n        System.out.println("✅ Java dasturi muvaffaqiyatli kompilyatsiya qilindi!");\n    }\n}`;
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
        const output = (data.program_output || data.program_message || "").trim();
        const compilerErr = (data.compiler_error || data.compiler_message || "").trim();
        const runtimeErr = (data.program_error || "").trim();
        const fullErrors = compilerErr ? (runtimeErr ? compilerErr + "\n" + runtimeErr : compilerErr) : runtimeErr;

        let parsedDiagnostics = [];
        if (!isSuccess && global.JavaAnalyzer) {
          parsedDiagnostics = global.JavaAnalyzer.formatCompilerDiagnostics(fullErrors || output);
        }

        return {
          success: isSuccess,
          output: output,
          errors: fullErrors,
          diagnostics: parsedDiagnostics,
          raw: data
        };
      } catch (err) {
        console.warn("Wandbox fetch error, fallback to client-side evaluation:", err);
        return {
          success: false,
          output: "",
          errors: `Internet yoki Cloud aloqa xatosi: ${err.message}. Iltimos, lokal tezkor tekshiruvdan foydalaning.`,
          diagnostics: [],
          networkError: true
        };
      }
    },

    // 3. Intelligent Line-by-Line Structural & OOP Rules Validator
    validateOOPRules(code, requirements = {}) {
      const results = {
        passed: true,
        syntaxErrors: [],
        semanticIssues: [],
        passedItems: [],
        lineFeedback: []
      };

      // 1. Lint syntax (semicolons, braces, quotes) with exact line numbers
      if (global.JavaAnalyzer) {
        const lint = global.JavaAnalyzer.lintSyntax(code);
        if (lint.hasErrors) {
          results.passed = false;
          results.syntaxErrors = lint.errors;
        }

        // 2. Analyze requirements against student's code
        const sem = global.JavaAnalyzer.analyzeRequirements(code, requirements);
        results.semanticIssues = sem.issues;
        results.passedItems = sem.passedItems;
        if (!sem.passed) {
          results.passed = false;
        }
      } else {
        // Fallback basic check if JavaAnalyzer is loading
        if (requirements.classes) {
          for (const cls of requirements.classes) {
            const hasCls = new RegExp(`(class|interface)\\s+${cls}\\b`).test(code);
            if (!hasCls) {
              results.passed = false;
              results.semanticIssues.push({
                line: null,
                title: `'${cls}' klassi topilmadi`,
                message: `'class ${cls} { ... }' e'lon qilinmagan.`,
                fix: `'class ${cls} { ... }' deb yozing.`
              });
            }
          }
        }
      }

      return results;
    }
  };

  global.JavaRunner = JavaRunner;
})(typeof window !== "undefined" ? window : global);
