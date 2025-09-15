abstract class Job {
    type: string;
    constructor(type: string) {
        this.type = type;
    }
    printType(): void{
        console.log(`Job type: ${this.type}`);
    }
    abstract calculateSalary(): number;
}

class PartimeJob extends Job{
    workingHours: number;
    constructor(workingHours: number) {
        super("Partime");
        this.workingHours = workingHours;
    }
    calculateSalary(): number {
        return this.workingHours * 30000;
    }
}

class FulltimeJob extends Job{
    constructor() {
        super("Fulltime");
    }
    calculateSalary(): number {
        return 10000000;
    }
}

let partimeJob = new PartimeJob(160);
let fulltimeJob = new FulltimeJob();
partimeJob.printType();
console.log(`Partime job salary: ${partimeJob.calculateSalary()}`);
fulltimeJob.printType();
console.log(`Fulltime job salary: ${fulltimeJob.calculateSalary()}`);