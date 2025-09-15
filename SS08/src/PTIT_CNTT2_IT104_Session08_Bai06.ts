const findElement = <T>(arr: T[], item: T): T | undefined => {
    for (const element of arr) {
        if(element === item){
            return item;
        }
    }
    return undefined;
}

const arr = [1,3,7,3,8,9];
const arr2 = [1,2,3,4];
console.log(findElement(arr, 3));
console.log(findElement(arr2, 10));

