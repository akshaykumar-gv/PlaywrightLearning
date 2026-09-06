class PPPExample{
    private privateATT:string;
    protected protectedATT:string;
    public publicATT:string;
    constructor(privateATT:string,protectedATT:string,publicATT:string ){
        this.privateATT = privateATT;
        this.protectedATT = protectedATT;
        this.publicATT = publicATT;
    }

    printPrivateATTinParent():void{
        console.log("Print Private Attribute in Parent",this.privateATT);
    }
    printPublicATTinParent():void{
        console.log("Print Public Attribute in Parent "+this.publicATT);
    }
}

class ProtectedPPPExample extends PPPExample{

    printPrivateATTinChid():void{
        console.log("Print Private Attribute in Parent",this.privateATT); // Not possible because scope of Priivate is only with in class
    }

    printProtectedATTinChild():void{
        console.log("Print Protected Attribute in Parent "+this.protectedATT); //Possible because scope of Protected is Follows to child
    } 

    printPublicATTinChild():void{
        console.log("Print Public Attribute in Parent "+this.publicATT);
    }
}

class publicPPPExample {
    ppp:ProtectedPPPExample = new ProtectedPPPExample("Hello","Hello","Hello");
    printPrivateATTinChid():void{
        console.log("Print Private Attribute in Parent",this.ppp.privateATT); // Not possible because scope of Private is only with in class
    }

    printProtectedATTinChild():void{
        console.log("Print Protected Attribute in Parent "+this.ppp.protectedATT); //Not Possible because scope of Protected is within class and subclasses
    } 

    printPublicATTinChild():void{
        console.log("Print Public Attribute in Parent "+this.ppp.publicATT);
    }
}

