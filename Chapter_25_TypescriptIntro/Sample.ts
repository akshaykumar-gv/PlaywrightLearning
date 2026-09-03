class A1 {
    eat():void{
        console.log("Eat from A1");
    }
    eatA1():void{
        console.log("Eat from A1 again");
    }
}

class B1 extends A1{
    eat(): void {
        console.log("Eat from B1");
    }
}

class C1 extends B1{
    eat():void{
        console.log("Eat from C1");
    }

    eatC1():void{
        console.log("Eat from C1 Again");
    }
    
}

let a1:A1 = new C1();
a1.eat();
a1.eatA1();

// a1.eatC1();