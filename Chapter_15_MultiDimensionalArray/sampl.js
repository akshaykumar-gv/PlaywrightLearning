// let date = new Date("08/12/2026");
// console.log(date);

// let date2 = new Date();
// console.log(date2.getDay());


var my_function = (some_array)=> some_array.map(a=>a%2===0?a+1:a-1);

console.log(my_function([0,1,2,3,4,5,6,7,8,9]));    

// console.log([2,3,4,5,6,7,8].map(a=>a));

var my_function2 = array => array.map(val => val + (val+1)%2 - val%2);



// const PI = Math.PI;
// const EULER = Math.E;
// const SQRT2 = Math.SQRT2;

// //Tail Begin
// try{
//     EULER = 0;
//     console.log(EULER);
//     PI = 0;
//     console.log(PI);
//     SQRT2 = 0;
//     console.log(SQRT2);
// } catch(err) {
//    console.log(err.message);  
// }