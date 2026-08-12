//Working with String Slice and SubString methods

let str = "Login_Test_Pass_001";

console.log(str.slice(0,5)); //Login
console.log(str.slice(0, str.indexOf("Pass"))); //Login_Test
console.log(str.slice(-3)); //001

console.log(str.substring(0,5)); //Login
console.log(str.substring(str.lastIndexOf("Pass"))); //Pass_001
console.log(str.substring(-3)); //Login_Test_Pass_001