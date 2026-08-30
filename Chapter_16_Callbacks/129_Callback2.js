function test(dadad, callMewhenDone){
    console.log("Hi start the Testcase");
    callMewhenDone();
}

test("Verify the login page is working", async (page) =>{
    console.log("Hello Okay");
});

function garimaStor(item, callMeWhenStoreIsEmpty){
    console.log("Store is busy!")
    //....
    console.log("Store is empty!")
    callMeWhenStoreIsEmpty();
}

garimaStor("starting shoppping", ()=>{
     console.log("lets start shopping....")
});