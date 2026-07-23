# TTA Learn Playwright

A small learning project for practicing JavaScript and Playwright concepts.

## Project structure

- `PlaywrightLearning/`
  - `Chapter_01_JSBasics/` - beginner-level JavaScript examples, including Hello World.
  - `Chapter_02_JSConcepts/` - JavaScript concept demonstrations such as `let` behavior.
  - `Chapter_03_Identifiers/` - identifier naming rules, comments, and related exercises.
  - `Chapter_04_Literals/` - examples focused on literal values in JavaScript.
  - `Chapter_05_Operators/` - operator examples, comparisons, ternary logic, and type inspection.
  - `Chapter_06_IFStatements/` - conditional logic with if-else statements and practice exercises.
  - `Chapter_07_SwitchStatement/` - switch-case statement syntax, use cases, and real-world examples.
  - `Chapter_08_UserInputs/` - methods for accepting user input from web, Node.js, and file system.
  - `Chapter_09_Loops/` - repetition with `for`, `while`, and `do...while` loops, including nested loops and exercises.
  - `TestPlanPrompt_RICEPOTS.txt` - a testing prompt or planning note for the project.

## Files and purpose

### Chapter_01_JSBasics
- `01_HelloWorld.js` - prints "Hello, World!" to demonstrate the simplest JavaScript program and verify Node.js execution.

### Chapter_02_JSConcepts
- `02_letConcept.js` - demonstrates block scope for `let`, variable redeclaration behavior, and a basic function call inside a loop.

### Chapter_03_Identifiers
- `03_Identifiers_Rules.js` - shows valid identifier examples, naming rules, and invalid identifier patterns in comments.
- `04_identifier_RuleP2.js` - explains naming convention styles such as camelCase, PascalCase, snake_case, and SCREAMING_SNAKE_CASE.
- `05_Comments.js` - documents single-line, multi-line, and JSDoc-style comments in JavaScript.
- `06_Identifies_IQ.js` - combines identifier rules with real examples and highlights valid versus invalid names, keywords, Unicode identifiers, and naming conventions.

### Chapter_04_Literals
- `07_Literals.js` - shows literal assignment for strings, booleans, numbers, `null`, and `undefined`; also uses `typeof` to inspect variable types.

### Chapter_05_Operators
- `13_Datatype.js` - introduces JavaScript data types and how they are represented.
- `14_Assignment_Operators.js` - demonstrates assignment operators and variable initialization.
- `15_Arithematic_Operators.js` - shows arithmetic operator usage with addition, subtraction, multiplication, division, and modulus.
- `16_Comparison_Operatos.js` - compares values using equality and relational operators.
- `17_Logical_Operators.js` - demonstrates logical operators `&&`, `||`, and `!` for boolean expressions.
- `18_Operators_Workshop.js` - operator practice examples and small problems.
- `19_Confusing_OperatorsWSP2.js` - highlights tricky or confusing operator behavior to reinforce correct usage.
- `21_String_Operator.js` - explores string concatenation and operator interaction with text values.
- `22_Ternary_Operator.js` - explains the ternary conditional operator and simple inline conditionals.
- `23_IQ1.js` - practice or quiz-style questions on operators and JavaScript concepts.
- `24_IQ2.js` - additional quiz-style operator examples for deeper learning.
- `25_IQ3.js` - third challenge file with operator-related puzzles or practice exercises.
- `26_IQ4.js` - fourth challenge file for operators and conditional logic practice.
- `27_Nested_TernaryOP.js` - demonstrates nested ternary operators and how to read them.
- `28_NTO_IQ1.js` - nested ternary quiz or practice exercise 1.
- `29_NTO_IQ2.js` - nested ternary quiz or practice exercise 2.
- `30_Typeof_Operator.js` - demonstrates the `typeof` operator to inspect JavaScript variable types.
 - `31_inc_dec_op.js` - demonstrates increment and decrement operators (`++` and `--`) in prefix and postfix forms.
 - `34_Decrement_Op.js` - focused examples on decrement operator behavior and edge cases.
 - `35_Nulllish_Coaelsing.js` - examples and notes on the nullish coalescing operator (`??`) and common use cases.

### Chapter_06_IFStatements
- `36_If_Statement.js` - basic if-else conditional logic and statement execution flow.
- `37_IQ2.js` - practice questions for if-else statement understanding.
- `38_IQ3.js` - additional exercises on conditional logic and control flow.

### Chapter_07_SwitchStatement
- `39_SwitchUsecase.js` - introduces switch statement syntax and basic use cases.
- `40_IQ.js` - initial practice questions on switch statements.
- `41_IQ2.js` - intermediate switch statement exercises.
- `42_Real_Switch_Example.js` - real-world application of switch statements.
- `43_SwitchCaseGrouping.js` - demonstrates how multiple cases can be grouped and handled together.
- `44_IQ3.js` - advanced practice questions on switch statements.
- `45_IQ4.js` - fourth challenge on switch statement concepts.
- `46_IQ5.js` - fifth challenge with complex switch statement scenarios.
- `47_IQ6.js` - sixth challenge for reinforcing switch statement mastery.

### Chapter_08_UserInputs
- `48_JS_WebMethod.js` - demonstrates input methods in web browsers (e.g., `prompt()`, `confirm()`).
- `49_Node_Method_UI.js` - user input techniques in Node.js environment.
- `50_PromptSync_UI.js` - synchronous prompting in Node.js using `prompt-sync` library.
- `51_FS_Method.js` - file system methods for reading and writing data using Node.js `fs` module.

### Chapter_09_Loops
- `52_loop.js` - introduces repetition by displaying a sequence of values.
- `53_ForLoop.js` - demonstrates `for` loop initialization, conditions, and increments.
- `54_ForLoop2.js` - practices `for` loops with different starting and ending values.
- `55_ForLoop3.js` - applies conditional logic inside a `for` loop.
- `56_WhileLoop.js` - compares a `for` loop with an equivalent `while` loop.
- `57_WhileLoop2.js` - demonstrates a limited retry loop with `while`.
- `58_WhileLoop3.js` - repeats a statement while a counter remains within a range.
- `59_WhileWithBreak.js` - uses `break` to exit an otherwise continuous `while` loop.
- `60_DoWhile.js` - demonstrates a `do...while` loop for repeated execution.
- `61_DoWhileVSWhile.js` - compares `do...while` and `while` behavior when the condition starts false.
- `62_NestedForLoop.js` - demonstrates nested `for` loops using two counters.
- `tasksIQ.js` - contains loop practice questions and pattern-printing exercises.

## Purpose

This repository is intended as a learning resource for understanding JavaScript fundamentals and preparing for Playwright test automation exercises. It is organized into chapters that each target a specific JavaScript topic.

## Usage

1. Open the project in Visual Studio Code.
2. Explore chapter folders and review the sample scripts.
3. Run any JavaScript example using Node.js, for example:

```powershell
node .\PlaywrightLearning\Chapter_04_Literals\07_Literals.js
```

## Notes

- This is a personal learning workspace rather than a packaged application.
- Add more chapters and examples as you learn new Playwright and JavaScript topics.
