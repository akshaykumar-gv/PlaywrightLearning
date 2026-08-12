//Declaration of an Object in JS
let a4 = {status: "Fail"};

//Accessing the object
console.log(a4.status);
console.log(a4["status"]);



let a1 = { status: 'pass' };
console.log(a1.status);

// keys are case sensitive.
let a22 = { status: "pass", Status: "fail" };
console.log(a22["status"]);
console.log(a22["Status"]);
console.log(a22.status);
console.log(a22.Status);



let a = { status: "pass" };
let b = a;  //Copy the reference //shallow copy
b.status = "fail";
console.log(a.status);


let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d);


const t_json = {
    "name": "pramod",
    "age": 10
};
// console.log(t_json);

const t_js = {
    name: "pramod",
    age: 10
};
// console.log(t_js);

let jsonObject = JSON.stringify(t_js);
let jsObject = JSON.parse(jsonObject);

console.log(jsonObject);
console.log(jsObject);