const str = "Hello World";

let vouwelCount = 0;
let consonantCount = 0;
const vowelsStr = "aeiou"
const alphaRegex = /[a-zA-Z]/;

for (const element of str.toLowerCase()) {
    if(alphaRegex.test(element)){
        if(vowelsStr.includes(element))
            vouwelCount++;
        else 
            consonantCount++;
    }
}

console.log(vouwelCount);
console.log(consonantCount);