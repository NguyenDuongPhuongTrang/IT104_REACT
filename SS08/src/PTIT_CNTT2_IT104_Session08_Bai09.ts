const flatten = <T>(arr: (T | T[])[]) : T[] =>{
    let result: T[] = [];
    
    for (const item of arr) {
        if(Array.isArray(item)){
            result = result.concat(flatten(item));
        }else{
            result.push(item);
        }
    }
    return result;
}

let arr = [[1, [2, [3, 4], 5], 6]];
console.log(flatten(arr));
