console.log(a);
var a =10;
console.log(a);

console.log(greeting); 
var greeting = "Hello!";
console.log(greeting); 

// Behind the scenes:
// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"