"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    displayInfor() {
        console.log(`Name: ${this.name}`);
    }
}
class Student extends Person {
    id;
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfor() {
        console.log(`Student ID: ${this.id}, Name: ${this.name}`);
    }
}
class Teacher extends Person {
    subject;
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfor() {
        console.log(`Teacher: ${this.name}, Subject: ${this.subject}`);
    }
}
const student = new Student("Nguyễn Văn A", 1);
const teacher = new Teacher("Trần Thị B", "Toán học");
student.displayInfor();
teacher.displayInfor();
