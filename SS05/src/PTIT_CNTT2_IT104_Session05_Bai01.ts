class Vehicle {
    name: string;
    year: number;
    company: string;
    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}

let vehicle1 = new Vehicle("Toyota Camry", 2020, "Toyota");
let vehicle2 = new Vehicle("Honda Accord", 2019, "Honda");
console.log(`Vehicle 1: ${vehicle1.name}, Year: ${vehicle1.year}, Company: ${vehicle1.company}`);
console.log(`Vehicle 2: ${vehicle2.name}, Year: ${vehicle2.year}, Company: ${vehicle2.company}`);
