import { BASE_URL as bURL,formatTestName,formatTestName2 } from "./utils.js";

function useImports(name){
    let url = bURL;
    let tc1 = formatTestName("BaseURL");
    let tc2 = formatTestName2("BaseURL");
    console.log(url,tc1,tc2);
}

useImports();