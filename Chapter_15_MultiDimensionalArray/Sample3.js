const nums = [1,2,3,5,6];
nums.sort((a,b)=>a-b);
//let index = nums.reduce((a, b, index) => b - a === 1 ?"": index);
let previousValue = nums[0]-1;
// let index = nums.reduce((a,b,index) => {
//     // console.log(index);
//     if(b-a===1)
//         "continue";
//     else
//         return index;
// })

let missingIndex = nums.reduce((a,b,index)=>b-a===1?"":index);

console.log(`missing value ${nums[missingIndex-1]-1}`);

let numStr = "9474";
const num = Number(numStr);
const len = numStr.length;
console.log(numStr.split(""));

let sumOfStr = numStr.split("").reduce((sum,a) => sum + Math.pow(Number(a), len), 0);
console.log(sumOfStr)

let sum = numStr.split("").reduce((sum, a) => {
    console.log(Number(a));
    sum+Math.pow(Number(a),len);
    console.log(sum);
},0);
console.log(sum);