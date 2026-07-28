let arr1 = ["Apple", "Banana", "Cherry"];

console.log(arr1[2]); //access the element at index 2
console.log(arr1.at(2)); //access the element at index 2

arr1[2] = "Orange"; //Modify the element at index 2

console.log(arr1[-1]); //undefined, cannot use negative indexes with []
console.log(arr1.at(-1)) // Orange, at can be used with negative indexes, hence -1 is last elemeng of the array is retrieved

console.log(arr1.length);
console.log(arr1.indexOf("Banana"));
console.log(arr1.indexOf("cherry"));