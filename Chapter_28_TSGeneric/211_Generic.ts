function getFirstElement(sarr:string[]):string{
    return sarr[0]!;
}

console.log(getFirstElement(["Akshay1","Akshay2","Akshay3"]));

// console.log(getFirstElement([200,201,202,203])); //Cannot be Used as the Parameters and Return type are Strictly Typed


function getFirstElementGeneric<T>(arr:T[]):T{
    return arr[0]!;
}

console.log(getFirstElementGeneric(["Akshay1","Akshay2","Akshay3"]));

console.log(getFirstElementGeneric([200,201,202,203])); //This is now possible because the function is generic

console.log(getFirstElementGeneric([]));