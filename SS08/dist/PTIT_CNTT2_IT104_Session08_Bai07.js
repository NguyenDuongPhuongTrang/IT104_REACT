"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flatten = (arr) => {
    return arr.flat();
};
let arr = [[1, 2], [3, 4], [5, 6]];
console.log(flatten(arr));
