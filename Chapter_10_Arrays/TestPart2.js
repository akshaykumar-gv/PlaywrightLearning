console.log(x);
var x = 10;

console.log(y);
let y = 10;

console.log(true + true);
console.log(0 || "hello");

if(''){
    console.log("true");
} else{
    console.log(false);
}

console.log(Boolean([]));

const success = Math.random() > 0.6;

if (success) {
  console.log('Success: random value was greater than 0.6');
  console.log('Result:', success);
} else {
  console.log('Failure: random value was 0.6 or less');
  console.log('Result:', success);
}

// Write your solution here
const roles = ["admin", "editor", "viewer", "tester", "manager"];
const users = [];
const user = [];
for (let i = 1; i <= 1; i++){
  let id = String(i).padStart(4, "0");
  let usrname = "TestUser_" + i;
  let email = `testuser${i}@testingacademy.com`;
  console.log(Math.floor(Math.random() * roles.length));
  let role = roles[(Math.floor(Math.random() * roles.length))];
  let isActive = i % 3 === 0 ? "ACTIVE" : "INACTIVE";

  user.push(id);
  user.push(usrname);
  user.push(email);
  user.push(role);
  user.push(isActive);

  users.push(user);
}

console.log(users);
