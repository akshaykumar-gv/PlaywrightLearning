/**
 * Example: Spread operator (call-site) vs Rest parameter (definition-site)
 *
 * - Spread operator (`...array`) expands an array into individual elements
 *   when calling a function: `fn(...arr)` becomes `fn(arr[0], arr[1], ...)`.
 * - Rest parameter (`function fn(...args)`) collects all supplied arguments
 *   into an array named `args` inside the function.
 */

// A simple function that expects three separate arguments
function add(a, b, c) {
    // If more than three arguments are passed, the extras are ignored.
    // If fewer than three are provided, missing values become `undefined`
    // and the numeric addition may produce `NaN`.
    return a + b + c;
}

// Sending the parameters using the spread operator: the array is expanded
// into individual arguments that match `add`'s parameters.
const arr = [1, 2, 3];
console.log(add(...arr)); // Output: 6 because add(1, 2, 3)

// If the array has more elements than the function expects, only the first
// three are used and the rest are ignored by `add`.
const arr2 = [1, 2, 3, 4, 5];
console.log(add(...arr2)); // Output: 6 (only 1,2,3 are used)

// Rest-parameter example: `add2` collects all incoming arguments into an
// array named `nums` and then sums them.
function add2(...nums) {
    // `nums` is a true array here. The reduce callback signature is
    // `(accumulator, currentValue) => ...`. We provide `0` as the initial
    // accumulator value so the function also works when `nums` is empty.
    return nums.reduce((accumulator, current) => accumulator + current, 0);
}

// Spread the arrays into individual arguments for add2 as well.
console.log(add2(...arr)); // 6
console.log(add2(...arr2)); // 15 (1+2+3+4+5)

// Important differences:
// - `add2(arr)` (without spreading) passes the entire array as a single
//   argument: `nums` becomes [[1,2,3]] and summing will attempt to add
//   a number and an array (not typically what you want).
// - `add2(...arr)` spreads the array so `nums` becomes [1,2,3].
console.log(add2(arr)); // passes the array itself as one element in `nums`
