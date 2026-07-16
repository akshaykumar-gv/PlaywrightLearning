// Multiple Condition

let age = 26;
//   age > 18 -> he will goa, else not else
// drink > 25  yes, else no 
let is_akshay_enjoy = age > 18 ? (age > 26 ? "Drink" : "No") : false; 
// Nested Ternary Operator 
// Performs a check if the age is greater than 18, if yes then it checks if the age is greater than 26, if yes then it returns "Drink" else it returns "No". If the age is not greater than 18, it returns false.
console.log(`Can akshay Drink? : ${is_akshay_enjoy}`);
