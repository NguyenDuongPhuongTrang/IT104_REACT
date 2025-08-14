const reverseArray = <T> (para: T[]): T[] => {
    return para.reverse();
}

let A = reverseArray([1,2,3]);
let B = reverseArray(['a','b','c']);
console.log(A);
console.log(B);

