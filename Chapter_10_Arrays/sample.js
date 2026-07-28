let arr = [1,2,3,4,5];
let arrCopy = arr.slice();
console.log(arr.slice(5))

console.log(arrCopy);

arrCopy[2] = 10;

console.log("---------------------------");

console.log(arrCopy);

console.log(arr);

//let struCopy = arr.structuredCopy();
//console.log(struCopy);
