# TTA Learn Playwright

A personal learning repository for practicing JavaScript fundamentals and Playwright concepts.

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
  - `Chapter_10_Arrays/` - array creation, access, modification, searching, sorting, and transformation examples.
  - `Chapter_11_Functions/` - function declarations, expressions, arrow functions, hoisting, and spread/rest examples.
  - `Chapter_12_FunctionClosure/` - function scope, closures, and function memory behavior.
  - `Chapter_13_Strings/` - string declaration, string methods, and string search examples.
  - `Imp_Notes.txt` - implementation notes, reminders, and study pointers.
  - `TestPlanPrompt_RICEPOTS.txt` - planning notes or testing prompts for the project.

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
- `08_Null_Undefined.js` - explains `null`, `undefined`, and their differences.
- `10_More_Literals.js` - covers additional literal examples and value initialization.
- `11_Number_Literals.js` - demonstrates different number literal formats.
- `12_Number_Literals_P2.js` - extends number literal examples with additional cases.

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
- `25_IQ3.js` - third challenge file with operator-related puzzles and practice exercises.
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
- `43_SwitchCaseGrouping.js` - demonstrates grouped `case` blocks in switch statements.
- `44_IQ3.js` - advanced practice questions on switch statements.
- `45_IQ4.js` - challenge problems for switch statement concepts.
- `46_IQ5.js` - complex switch scenario examples.
- `47_IQ6.js` - advanced reinforcement for switch mastery.

### Chapter_08_UserInputs
- `48_JS_WebMethod.js` - demonstrates input methods in web browsers (e.g., `prompt()` and `confirm()`).
- `49_Node_Method_UI.js` - user input techniques in Node.js environment.
- `50_PromptSync_UI.js` - synchronous prompting in Node.js using `prompt-sync` library.
- `51_FS_Method.js` - file system methods for reading and writing data using Node.js `fs` module.
- `livetest.js` - additional interactive input experiments.

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
- `63_IQ2.js` - loop practice questions and challenge examples.
- `liveTest.js` - quick live loop testing and experimentation.
- `tasksIQ.js` - contains loop practice questions and pattern-printing exercises.

### Chapter_10_Arrays
- `64_ArrayIntro.js` - introduces arrays and array literals in JavaScript.
- `65_ArrayIntro2.js` - explores array indexing, length, and common array operations.
- `66_ArrayCreation.js` - shows different ways to create arrays and initialize values.
- `67_ArrayAccessModify.js` - demonstrates accessing and modifying array elements.
- `68_ArrayAddingRemoving.js` - covers adding and removing items from arrays.
- `69_ArrayRTExample.js` - runtime examples of array behavior and use cases.
- `70_ArraySearching.js` - searches arrays with index and condition-based methods.
- `71_ArrayMoreIBMethods.js` - explains more built-in array methods for manipulation.
- `72_ArrayIterate.js` - iterates arrays using loops and callback-based methods.
- `73_Array_Transform.js` - array transform and mapping examples.
- `74_Sorting.js` - sorting arrays and using comparison functions.
- `75_Slicing.js` - works with array subsets using slice and splice.
- `76_ArrayConcat.js` - concatenates arrays and merges values.
- `77_ArrayChecking.js` - checks arrays with built-in methods.
- `78_ArrayCopy.js` - array copy, cloning, and shallow copy behavior.
- `79_ArrayDestructuring.js` - destructures array values into separate variables.
- `sample.js` - a sample file demonstrating array usage patterns.
- `TestPart2.js` - additional array experiments and examples.

### Chapter_11_Functions
- `80_Function.js` - basic function declaration and invocation examples.
- `81_Function.js` - additional function examples and use cases.
- `82_Type1_Function.js` - type 1 function syntax and parameter handling.
- `83_Type2_Function.js` - function expression examples.
- `84_Type3_Function.js` - advanced function examples and patterns.
- `85_Type4_Function.js` - additional function styles and behaviors.
- `86_FunctionAsExpression.js` - functions used as expressions and passed as values.
- `87_Arrow_Function.js` - arrow function syntax and simple arrow examples.
- `88_ArrowFunction_MoreEx.js` - more arrow function examples and comparisons.
- `89_RealTime_Example.js` - real-world function usage scenarios.
- `90_IIFE.js` - immediately-invoked function expression examples.
- `91_SpreadFunction.js` - spread operator and rest parameter demonstrations.
- `92_ReturnFunction.js` - returning values from functions and using results.
- `93_Var_Let_Const.js` - variable declarations inside functions with `var`, `let`, and `const`.
- `94_Hoisting.js` - hoisting behavior for variables and functions.
- `95_Var_Hoisting.js` - detailed examples of `var` hoisting.
- `96-FnHoisting.js` - function hoisting examples.
- `97_Let_Hoisting.js` - `let` hoisting and temporal dead zone demonstrations.
- `98_TDZ.js` - temporal dead zone examples and error behavior.
- `99_IQ.js` - function practice questions and quiz examples.
- `sample.js` - sample function usage patterns.

### Chapter_12_FunctionClosure
- `103_Function_Scope.js` - demonstrates function scope and variable visibility.
- `104_Function_Closure.js` - closure examples showing how functions retain access to outer scope.
- `105_Function_Rememberance.js` - closure examples and function memory behavior.
- `106_RTExample.js` - real-time examples for closure and scope.
- `107_Simple.js` - simple closure and function scope demonstrations.

### Chapter_13_Strings
- `109_String_Declaration_Types.js` - shows different string declaration styles and usage.
- `110_StringFunctions.js` - demonstrates common string methods and functions.
- `111_StringSearching.js` - searches strings using built-in string methods.

## Top-level files
- `Imp_Notes.txt` - implementation notes, reminders, and study pointers.
- `TestPlanPrompt_RICEPOTS.txt` - planning notes or testing prompts for the project.

## Purpose

This repository is intended as a learning resource for understanding JavaScript fundamentals and preparing for Playwright test automation exercises. It is organized into chapters that each target a specific JavaScript topic.

## Usage

1. Open the project in Visual Studio Code.
2. Explore chapter folders and review the sample scripts.
3. Run any JavaScript example using Node.js from the repository root, for example:

```powershell
cd .\PlaywrightLearning\Chapter_10_Arrays
node 70_ArraySearching.js
```

## Changelog

- 2026-07-28: Added `Chapter_10_Arrays` documentation and file descriptions.
- 2026-08-07: Updated README to reflect the complete current codebase structure.

## Playwright

- **Install:**
  - `npm install -D @playwright/test`
  - `npx playwright install`
- **Run tests:**
  - `npx playwright test`
- **View report:**
  - `npx playwright show-report`

## Contributing

- **Run examples locally:** change into a chapter folder and run a file with Node.js, for example:
  - `cd PlaywrightLearning/Chapter_10_Arrays`
  - `node 70_ArraySearching.js`
- **Add content:** create a new `Chapter_*` folder with examples and update this README.
- **Pull requests:** fork the repository, open a branch with your changes, and create a PR with a short description of what you added and why.

## Notes

- This is a personal learning workspace rather than a packaged application.
- Add more chapters and examples as you learn new Playwright and JavaScript topics.
