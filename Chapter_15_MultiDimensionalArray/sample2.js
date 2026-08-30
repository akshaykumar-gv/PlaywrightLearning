const notZeroRegex = /[^0]/;
const input = "00012345";

let index = input.search(/[^0]/);
console.log(index);

let startIndex = 0;
for(let ch of input){
    if(ch!=='0')
        break;
    else
        startIndex++;
}
console.log(index);
console.log(input.slice(startIndex));

const str = "Hello World from Java";
// let result = (str.split(" ")).reduce((a,result)=>result+a.split("")[0],"");
let strArr = str.split(" ");
let result = strArr.reduce((sum,a) =>sum+a[0],"");
console.log(strArr);
console.log(result);

let s = "swiss";
let upperCaseStr = s.toUpperCase();
for (let ch of upperCaseStr) {
    let firstIndex = upperCaseStr.indexOf(ch);
    let lastIndex = upperCaseStr.lastIndexOf(ch);
    console.log(firstIndex)
    console.log(lastIndex)
    if (firstIndex === lastIndex) {
        console.log(s[firstIndex]);
        break;
    }
}

console.log("s"==="S");