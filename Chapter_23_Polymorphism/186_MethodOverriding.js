class A {
    greet(){
        console.log("Hello");
    }
}

class B extends A{
    greet(){
        console.log("Hello From B")
    }
}

let bObj = new B();
let aObj = new A();

bObj.greet();
aObj.greet();
