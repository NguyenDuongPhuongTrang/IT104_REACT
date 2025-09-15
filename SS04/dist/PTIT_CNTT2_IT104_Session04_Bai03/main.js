"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = {
    name: "Nguyen Van A",
    age: 20,
    email: "a@gmail.com"
};
const displayStudentInfo = (student) => {
    console.log(`Tôi tên là: ${student.name}, tôi ${student.age} tuổi, email của tôi là: ${student.email}`);
};
displayStudentInfo(students);
