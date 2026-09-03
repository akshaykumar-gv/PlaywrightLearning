let responseCodes:number[] = [200,201,303,400,202,402,500,503];

function getFailedCodes(responseCodes:number[]):number[]{
    return responseCodes.filter(a=>a>=400);
}

console.log(getFailedCodes(responseCodes));