let Ex1dArray = [1,2,3,4,5];
let Ex2dArray = [[1,2,3,4,5],[6,7,8,9,10]];

console.log(Ex1dArray);
console.log(Ex2dArray);

//Accessing 2d Array using for loop
for(let i=0; i<Ex2dArray.length; i++){
    for(let j=0; j<Ex2dArray[i].length;j++){
        process.stdout.write(Ex2dArray[i][j].toString());
    }
    console.log();   
}