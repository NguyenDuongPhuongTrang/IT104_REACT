const flatten = <T>(arr: T[][]): T[] => {
    return arr.flat();
}

let arr = [[1, 2], [3, 4], [5, 6]];
console.log(flatten(arr));
