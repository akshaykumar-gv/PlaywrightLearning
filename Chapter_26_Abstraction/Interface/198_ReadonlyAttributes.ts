interface ROA{
    readonly x:number;
    readonly y:number;
}

const r1:ROA = {
    x:22,
    y:25,
}

const r2:ROA={
    x:55,
    y:78
}

//not possible Cannot assign to 'x' because it is a read-only property.
// r1.x = 55;