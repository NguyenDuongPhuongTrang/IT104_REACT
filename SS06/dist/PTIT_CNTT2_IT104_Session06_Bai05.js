"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    speed;
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 10;
        console.log(`Phương tiện đã tăng lên ${this.speed} km/h`);
    }
    slowDown() {
        this.speed -= 10;
        if (this.speed < 0) {
            this.speed = 0;
            console.log("Phương tiện đã dừng lại. Không thể giảm tốc độ");
            return;
        }
        console.log(`Phương tiện đã giảm xuống ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`Phương tiện đã dừng lại.`);
    }
}
let vehicle = new Vehicle(50);
vehicle.speedUp();
vehicle.slowDown();
vehicle.slowDown();
vehicle.stop();
vehicle.slowDown();
