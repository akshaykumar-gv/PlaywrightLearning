class A {
    greet(){
        console.log("Hello from A")
    }
}

class B extends A {
    greetFromB(){
        console.log("Hello from B");
    }
}

class C extends B {
    greetFromC(){
        console.log("Hello from C");
    }
}

let c = new C();
c.greet();
c.greetFromB();
c.greetFromC()