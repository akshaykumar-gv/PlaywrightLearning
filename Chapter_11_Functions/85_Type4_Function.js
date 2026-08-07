// Type 4 - With arg and With return
function type4Function(name){
    console.log("Hi There!",name);
    return typeof name;
}

console.log(type4Function("Akshay"));
console.log(type4Function(100));
console.log(type4Function(true));
console.log(type4Function(["Akshay","Bob"]));