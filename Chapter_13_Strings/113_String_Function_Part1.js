//toUpperCase(), toLowerCase(), trim(), trimStart(), trimEnd()
//replace(), replaceAll(), concat()

let str = " This is a Playwright Learning Repo ";

console.log(str.toUpperCase()); // THIS IS A PLAYWRIGHT LEARNING REPO
console.log(str.toLowerCase()); // this is a playwright learning repo

console.log(str.trim()); //This is a Playwright Learnig Repo
console.log(str.trimStart());//This is a Playwright Learning Repo
console.log(str.trimEnd()); // This is a Playwright Learning Repo

console.log(str.replace("Repo","Repository")); //This is a Playwright Learning Repository


let str2 = "This is a is a demo demo demo of replace All";
console.log(str2.replace("is","Hello")); //This Hello a is a demo demo demo of replace All
console.log(str2.replaceAll("is", "Hello")); //This Hello a Hello a demo demo demo of replace All

console.log("Hello"+" World");
console.log("Hello".concat(" ","World", " Hello"));
console.log(`${"Hello"} ${"World"}`);