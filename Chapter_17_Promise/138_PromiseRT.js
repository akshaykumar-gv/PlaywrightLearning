let apiCall =  new Promise(function(resolve, reject){
    reject("500 Server Error");
})

apiCall.then(function(data){
    console.log(data);
}).catch(function(data){
    console.log(data);
})