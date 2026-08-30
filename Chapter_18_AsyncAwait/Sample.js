console.log("A");
async function example(){
    console.log("B");
    await Promise.resolve();
    console.log("C");
} 

await example();
console.log("D")