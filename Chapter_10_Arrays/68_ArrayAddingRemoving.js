let arr = [1,2,3,4,5,6,7];
arr.push(8); // adds an element 8 at last of the array
console.log(arr); 
arr.unshift(0); // adds an element at first of the array 
console.log(arr);
arr.pop(); //remove the last element of an array and returns the element
console.log(arr);
arr.shift(); //removes the first element of an array and returns the element
console.log(arr);

arr.shift(2);
console.log(arr);

arr.splice(2, 1);
console.log(arr);

arr.splice(2, 0, 99);
console.log(arr);

arr.splice(1, 2, 10, 20);
console.log(arr);