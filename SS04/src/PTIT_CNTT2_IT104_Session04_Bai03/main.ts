interface Student {
    name: string;
    age: number;
    email: string;
}

let students: Student = {
    name: "Nguyen Van A",
    age: 20,
    email: "a@gmail.com"
}

const displayStudentInfo = (student: Student): void => {
    console.log(`Tôi tên là: ${student.name}, tôi ${student.age} tuổi, email của tôi là: ${student.email}`);
}

displayStudentInfo(students);