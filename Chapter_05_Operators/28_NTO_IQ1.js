let statusCode = 200;
let result = 
    statusCode< 300 ? "Success" :
        statusCode < 400 ? "Redirect":
            statusCode < 500 ? "Client Error" : "Server Error";

console.log(`Status code ${statusCode} is in category "${result}"`);   
