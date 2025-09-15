"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findElement = (arr, item) => {
    for (const element of arr) {
        if (element === item) {
            return item;
        }
    }
    return undefined;
};
const arr = [1, 3, 7, 3, 8, 9];
const arr2 = [1, 2, 3, 4];
console.log(findElement(arr, 3));
console.log(findElement(arr2, 10));
