// function calculate(a,b,operation){
//     return operation(a,b);
// }

// let sum = calculate(3,4,(x,y)=>{x+y});
// console.log(sum);


function calculate(a, b, operation) {
    return operation(a, b);
}

let sum = calculate(10, 5,  (x, y) =>{
    return x + y;
});

console.log(sum);