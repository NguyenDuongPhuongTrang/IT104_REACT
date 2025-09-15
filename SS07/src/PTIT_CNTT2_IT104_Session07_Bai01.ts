class Employee{
    public name: string;
    protected company: string;
    private phone: string;
    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    getName(): string {
        return this.name;
    }
    printInfo(): void {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
    }
}

class Manager extends Employee {
    teamSize: number;
    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo(): void {
        super.printInfo();
        console.log(`Team Size: ${this.teamSize}`);
    }
}

let one = new Employee("Alice", "TechCorp", "123-456-7890");
let two = new Manager("Bob", "TechCorp", "098-765-4321", 5);
one.printInfo();
two.printInfo();