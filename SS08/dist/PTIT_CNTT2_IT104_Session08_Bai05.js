"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firstNumber = (arr) => {
    for (const item of arr) {
        if (item % 2 == 0) {
            return item;
        }
    }
    return undefined;
};
const number = [1, 3, 2, 4, 6, 7];
const num2 = [31, 11, 13];
console.log(firstNumber(number));
console.log(firstNumber(num2));
