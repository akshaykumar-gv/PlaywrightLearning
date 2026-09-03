interface Hooks{
    (testName:string):void;
}

let beforeHook:Hooks = (testName)=> console.log("Hello "+testName);
let afterHook:Hooks = (testName) => console.log("hello from After",testName);

beforeHook("Login");
afterHook("Login");
