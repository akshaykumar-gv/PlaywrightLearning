let username:string = "Akshay";
let age:number = 25;
let pi:number = 3.47;
let distanceToMoon:number = 152525524521;

let isActive:boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["John", "Jane"];

// Any (avoid when possible)
let anything: any = "hello";

// Unknown (safer than any)
let unknown: unknown = "hello";

let message: string = "Hello, TypeScript!";
let count: number = 42;

console.log("Message:", message);
console.log("Count:", count);
console.log("Is Active:", isActive);