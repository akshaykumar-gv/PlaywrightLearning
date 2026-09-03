interface APIResponse {
    statusCode: number;
    body: string;
    headers?:Object;
    responseTime:number;
};

let responseData: APIResponse = {
    statusCode:200,
    body: "{}",
    responseTime: 200
}

console.log("Status:", responseData.statusCode);
console.log("Body:", responseData.body);

let responseData2: APIResponse = {
    statusCode:200,
    body: "{}",
    headers: {},
    responseTime: 200
}
