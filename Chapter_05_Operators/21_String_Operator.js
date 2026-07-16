let s = "Hi, ";
console.log(typeof s);
s += "Dev";
console.log(s);

console.log("Hello" + "World"); // "HelloWorld" // Because of the + operator, it will concatenate the two strings and print "HelloWorld" in the console.
console.log("HELLO", "Akshay"); // "HELLO Akshay" // Because of the comma operator, it will print all the values in the console.
console.log(1, 2, 3, 4, "Hello", true); // 1, 2, 3, 4, "Hello", true //Becase of the comma operator, it will print all the values in the console. 
// The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand. In this case, it will print all the values separated by spaces.