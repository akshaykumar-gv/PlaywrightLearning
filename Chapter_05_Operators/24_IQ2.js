let environment = "staging";
let url = environment === "production" ? "https://www.production.com" : "https://www.staging.com"; // Using the ternary operator to check if the environment is production. If it is, it will set the URL to the production URL, otherwise it will set it to the staging URL.
console.log(url); // "https://www.staging.com";