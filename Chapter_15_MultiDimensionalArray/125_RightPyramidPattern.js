

let n =5;

for(let i=0; i<n; i++){
    for(let j=0; j<n;j++){
        if(j<=i){
            process.stdout.write("*");
        }
    }
    console.log();
}

for(let i=n-1; i>0; i--){
    for(let j=0; j<i;j++){
        if(j<=i){
            process.stdout.write("*");
        }
    }
    console.log();
}