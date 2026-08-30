function buy(item, callback){
    console.log(item,"Added to cart");
    callback(item);
}

function printItem(item){
    console.log(item,"Sold");
}

// buy("Shoes",printItem);
// buy("Burger",printItem);
// buy("Pizza",printItem);

//Second way of calling the callback Function
buy("Shoes",function(){
     console.log("Sold");
})

//Third way of calling the callback Function
buy("Burger",(item,item2)=>{
    console.log(item,"Sold");
    console.log(item2,"Sold too");
})