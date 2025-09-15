"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
};
const person = { name: "Trang", age: 18 };
const job = { job: "Student", specialized: "IT" };
console.log(combine(person, job));
