interface Calculator2{
    a:number;
    b:number;
    add():number;
    sub():number;
}

class cal1 implements Calculator2{
    a:number;
    b:number;
    constructor(a:number,b:number){
        this.a =a ;
        this.b =b;
    }

    add(): number {
        return this.a+this.b;
    }

    sub():number {
        return this.a-this.b;
    }
}


const calImpl:cal1 = new cal1(10,5);
console.log(calImpl.add());
console.log(calImpl.sub());
