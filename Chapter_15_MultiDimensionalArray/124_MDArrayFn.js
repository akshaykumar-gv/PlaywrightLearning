let scores = [
    [85, 90, 78],   // student 0 , 253
    [60, 45, 70],   // student 1,  175
    [95, 88, 92]    // student 2, 275
];

let rowSum = scores.map(row => row.reduce((a,b) =>a+b));
console.log(rowSum);

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

suiteResults.forEach(row=>{
    row.forEach(cell=>{
        if(cell.includes("fail"))
            console.log(cell);
    })
})

