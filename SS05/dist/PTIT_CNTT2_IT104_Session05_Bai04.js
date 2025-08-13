"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    year;
    company;
    id;
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
}
let vehicle1 = new Vehicle("Toyota Camry", 2020, "Toyota", 1);
let vehicle2 = new Vehicle("Honda Accord", 2019, "Honda", 2);
console.log(`Vehicle 1: ${vehicle1.name}, Year: ${vehicle1.year}, Company: ${vehicle1.company}, ID: ${vehicle1.id}`);
console.log(`Vehicle 2: ${vehicle2.name}, Year: ${vehicle2.year}, Company: ${vehicle2.company}, ID: ${vehicle2.id}`);
// thuộc tính id là readonly, không thể thay đổi
// thuộc tính year là protected, chỉ có thể truy cập trong lớp Vehicle và các lớp con nên không thể in
// thuộc tính company là private, chỉ có thể truy cập trong lớp Vehicle nên không thể in 
