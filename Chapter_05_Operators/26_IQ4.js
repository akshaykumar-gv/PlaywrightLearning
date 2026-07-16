let responseTime = 850;
let requiredSLA = 1000;
let isSLAmet = responseTime <= requiredSLA ? "SLA Met" : "SLA Breached";
console.log(isSLAmet); // output: SLA Met
