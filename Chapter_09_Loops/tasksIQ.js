// var sum = 0;
// for (var i = 1; i <= 5; i++);
//   sum += i;
// console.log(sum);

// let i = 0;
// while (i < NaN) {
//   i++;
// }
// console.log(i);

// let i = 3, count = 0;
// do {
//     console.log(i);
//   count++;
// } while (i-- > 0);
// console.log(count + " " + i);

// for (let i = 1; i <= 4; i++){
//     console.log('*'.repeat(i) + " ".repeat(4 - i));
// }

// for (let i = 4; i <= 0; i--){
//     console.log('*'.repeat(i));
// }

for(let i=1;i<=4; i++){
    console.log(' '.repeat(4-i)+'*'.repeat(2*i-1)+' '.repeat(4-i));
}