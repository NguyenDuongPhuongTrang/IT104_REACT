class Student {
    id: number;
    age: number;
    email: string;
    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}

let allStudents: Student[] = [];

function addStudent(id: number, age: number, email: string): void {
    let student = new Student(id, age, email);
    allStudents.push(student);
}

function displayStudents(): void {
    allStudents.forEach(student => {
        console.log(`ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
    });
}

addStudent(1, 18, "Phương Trang");
addStudent(2, 18, "Sơn Bùi");
addStudent(3, 18, "Kiên Vũ");
addStudent(4, 18, "Trí Công");
displayStudents();