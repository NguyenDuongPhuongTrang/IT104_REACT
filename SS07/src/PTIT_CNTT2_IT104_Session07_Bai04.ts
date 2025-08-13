abstract class Person{
    public name: string;
    constructor(name: string){
        this.name = name;
    }
    displayInfor(): void{
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person{
    id: number;
    constructor(name: string, id: number){
        super(name);
        this.id = id;
    }
    public override displayInfor(): void {
        console.log(`Student ID: ${this.id}, Name: ${this.name}`);
    }
}

class Teacher extends Person {
    public subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }

    public override displayInfor(): void {
        console.log(`Teacher: ${this.name}, Subject: ${this.subject}`);
    }
}

const student = new Student("Nguyễn Văn A", 1);
const teacher = new Teacher("Trần Thị B", "Toán học");

student.displayInfor();  
teacher.displayInfor();