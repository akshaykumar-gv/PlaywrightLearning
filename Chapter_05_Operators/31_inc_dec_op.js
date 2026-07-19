//Pre Increment
let a = 10;
let b = ++a; // a = 11, b = 11
console.log(b); // 11


// Post Increment
let a1 = 10;
let b1 = a1++; // b1 = 10, a1 = 11
console.log(b1); // 10

//Lab 32
let a3 = 10;
console.log(++a3 + a3); // 22 //First ++a3 = 11, then a3 = 11, so 11 + 11 = 22
console.log(a3); // 11


//Lab 33
let a4 = 10;
console.log(++a4 + a4 + a4++); // first ++a4 = 11, then a4 = 11, then a4++ = 11, so 11 + 11 + 11 = 33
console.log(a4); // 12

let i = 1;
let result = i++ + ++i; // first i++ = 1, then ++i = 3, so 1 + 3 = 4
console.log(result, i); // 4 3 


let a5 = 10;
console.log(++a5 + ++a5); // first ++a5 = 11, then ++a5 = 12, so 11 + 12 = 23
console.log(a5); // 12

let a6 = 34;
let result = a6++;  // first a6++ = 34, then a6 = 35
console.log(result); // 34
console.log(a6); // 35