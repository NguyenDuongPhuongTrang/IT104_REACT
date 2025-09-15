"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
}
const allStudents = [];
class Classroom {
    students = [];
    showStudents() {
        if (this.students.length === 0) {
            console.log("Không có học sinh trong lớp.");
        }
        else {
            console.log("Danh sách học sinh trong lớp: ");
            this.students.forEach(student => {
                console.log(`ID: ${student.getId()}, Name: ${student.name}`);
            });
        }
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.filter(student => student.getId() === id);
    }
    addStudentInClass(id) {
        const student = allStudents.find(student => student.getId() === id);
        if (student) {
            const index = allStudents.indexOf(student);
            if (index === -1) {
                console.log(`Học sinh với ID ${id} không có trong danh sách allStudents.`);
                return;
            }
            if (this.filterStudent(id).length > 0) {
                console.log(`Học sinh với ID ${id} đã có trong lớp.`);
            }
            else {
                this.addStudent(student);
                allStudents.splice(index, 1);
                console.log(`Học sinh với ID ${id} đã được thêm vào lớp.`);
            }
        }
        else {
            console.log(`Không tìm thấy học sinh với ID ${id}.`);
        }
    }
    removeStudent(id) {
        const removedStudent = this.students.find(student => student.getId() === id);
        if (removedStudent) {
            this.students = this.students.filter(student => student.getId() !== id);
            allStudents.push(removedStudent); // Thêm học sinh trở lại allStudents
            console.log(`Học sinh với ID ${id} đã được xóa khỏi lớp và thêm trở lại allStudents.`);
        }
        else {
            console.log(`Không tìm thấy học sinh với ID ${id} trong lớp.`);
        }
    }
    editStudent(id, newName) {
        const student = this.students.find(student => student.getId() === id);
        if (student) {
            student.name = newName;
            console.log(`Tên học sinh với ID ${id} đã được cập nhật thành ${newName}.`);
        }
        else {
            console.log(`Không tìm thấy học sinh với ID ${id} trong lớp.`);
        }
    }
}
// ----- Tạo 6 học sinh -----
allStudents.push(new Student(1, "An"));
allStudents.push(new Student(2, "Bình"));
allStudents.push(new Student(3, "Chi"));
allStudents.push(new Student(4, "Dũng"));
allStudents.push(new Student(5, "Hà"));
allStudents.push(new Student(6, "Linh"));
// ----- Tạo 2 lớp học -----
let classA = new Classroom();
let classB = new Classroom();
// Mỗi lớp thêm 3 học sinh từ allStudents
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
// ----- Kiểm tra -----
console.log("=== Lớp A ===");
classA.showStudents();
console.log("\n=== Lớp B ===");
classB.showStudents();
console.log("\n=== Danh sách allStudents sau khi chia lớp ===");
console.log(allStudents); // Sẽ rỗng
// ----- Xóa học sinh -----
classA.removeStudent(2);
console.log("\n=== Danh sách lớp A sau khi xóa học sinh ===");
classA.showStudents();
classB.removeStudent(5);
console.log("\n=== Danh sách lớp B sau khi xóa học sinh ===");
classB.showStudents();
// ----- Danh sách allStudents sau khi xóa học sinh -----
console.log("\n=== Danh sách allStudents sau khi xóa học sinh ===");
console.log(allStudents);
// ----- Chỉnh sửa tên học sinh -----
classA.editStudent(1, "An Nguyen");
classB.editStudent(4, "Dũng Trần");
console.log("\n=== Danh sách lớp A sau khi chỉnh sửa tên học sinh ===");
classA.showStudents();
console.log("\n=== Danh sách lớp B sau khi chỉnh sửa tên học sinh ===");
classB.showStudents();
