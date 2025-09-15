"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = "banana";
let char = str.split('');
for (let i = 0; i < char.length; i++) {
    for (let j = i + 1; j < char.length; j++) {
        if (char[i] === char[j]) {
            char.splice(j, 1);
            j--;
        }
    }
}
let result = char.join('');
console.log(result);
//# sourceMappingURL=main.js.map