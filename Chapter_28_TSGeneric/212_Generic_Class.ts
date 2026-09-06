class GetTestData<T>{
    data: T[] = [];

    public putItem(item:T):void{
        this.data.push(item);
    }

    public putItems(items:T[]):void{
        this.data.push(...items);
    }

    public getFirtsItem():T{
        return this.data[0]!;
    }

    public getItems():T[]{
        return this.data;
    }

    public getCount():number{
        return this.data.length;
    }

}

let testDataString :GetTestData<String> = new GetTestData();
testDataString.putItem("Akshay");
testDataString.putItems(["Akshay1","Akshay2","Akshay3"]);
console.log(testDataString.getFirtsItem());
console.log(testDataString.getItems());
console.log(testDataString.getCount());

const testDataNumber: GetTestData<number> = new GetTestData();
testDataNumber.putItem(1);
testDataNumber.putItems([1,2,3,4,5]);
console.log(testDataNumber.getFirtsItem());
console.log(testDataNumber.getItems());
console.log(testDataNumber.getCount());
