"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    speed;
    id;
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    speedUp() {
        this.speed += 10;
        console.log(`Phương tiện đã tăng lên ${this.speed} km/h`);
    }
    slowDown() {
        this.speed -= 10;
        if (this.speed < 0) {
            this.speed = 0;
            console.log(`${this.name} đã dừng lại. Không thể giảm tốc độ`);
            return;
        }
        console.log(`${this.name} đã giảm xuống ${this.speed} km/h`);
    }
    showSpeed() {
        console.log(`Tốc độ hiện tại của ${this.name} là ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    gear;
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Xe đạp: ${this.name}, Tốc độ: ${this.speed} km/h, ID: ${this.id}, Số bánh răng: ${this.gear}`);
    }
}
let bike = new Bicycle("Xe đạp thể thao", 20, 1, 5);
bike.showInfo();
bike.speedUp();
bike.showSpeed();
bike.slowDown();
bike.showSpeed();
