"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let score = [8, 9, 7, 6, 10, 8.3, 9.5, 7.8, 6.5, 8.9];
let total = score.reduce((sum, current) => sum + current, 0);
let average = total / score.length;
console.log(`Điểm trung bình: ${average.toFixed(2)}`);
