"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const partialUpdate = (obj, updates) => {
    return { ...obj, ...updates };
};
let person = { name: "Kiên", age: 18, job: "Student" };
console.log(partialUpdate(person, { age: 19 }));
