interface Calculator{
    add(a:number, b:number):number;
    subtract(a:number, b:number):number;
}

const aCal:Calculator = {
    add(a:number, b:number) {
        return a+b;
    },

    subtract(a, b) {
        return a-b;
    },
};

console.log(aCal.add(5,10));
console.log(aCal.subtract(10,5));
// console.log(aCal.subtract(8,"asd")); //Argument of type 'string' is not assignable to parameter of type 'number'.