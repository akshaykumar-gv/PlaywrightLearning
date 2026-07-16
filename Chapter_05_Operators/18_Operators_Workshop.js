// Rule of thumb:
//   ==   → loose equality  (does type coercion, surprising)
//   ===  → strict equality (no coercion, what you usually want)

// ---------- 1. Empty string vs 0 vs "0"  (transitivity broken) ----------
console.log("" == 0);        // true   → "" coerced to Number → 0
console.log("0" == 0);       // true   → "0" coerced to Number → 0
console.log("" == "0");      // false  → both strings, compared as-is

// === fixes it
console.log("" === 0);       // false
console.log("0" === 0);      // false
console.log("" === "0");     // false


console.log(" " == 0); // true  → " " coerced to Number → 0
console.log(true == 1); // true  → true coerced to Number → 1
console.log(0==false); // true  → false coerced to Number → 0


console.log(true === 1); // false  → true is not strictly equal to 1
console.log(0 === false); // false  → 0 is not strictly equal to false






