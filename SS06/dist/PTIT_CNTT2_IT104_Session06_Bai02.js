"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    type;
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Job type: ${this.type}`);
    }
}
class PartimeJob extends Job {
    workingHours;
    constructor(workingHours) {
        super("Partime");
        this.workingHours = workingHours;
    }
    calculateSalary() {
        return this.workingHours * 30000;
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Fulltime");
    }
    calculateSalary() {
        return 10000000;
    }
}
let partimeJob = new PartimeJob(160);
let fulltimeJob = new FulltimeJob();
partimeJob.printType();
console.log(`Partime job salary: ${partimeJob.calculateSalary()}`);
fulltimeJob.printType();
console.log(`Fulltime job salary: ${fulltimeJob.calculateSalary()}`);
