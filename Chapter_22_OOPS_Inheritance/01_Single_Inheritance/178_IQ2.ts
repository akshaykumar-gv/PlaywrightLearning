class BaseTest2 {
    setup() {
        console.log("Base: open browser");
    }
}
class APITest2 extends BaseTest2 {
    setup() {
        console.log("APITest: open browser");
    }
}

let test2:BaseTest2 = new APITest2();
test2.setup();