class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;
    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    speedUp():void{
        this.speed += 10;
        console.log(`Phương tiện đã tăng lên ${this.speed} km/h`);
    }
    slowDown():void{
        this.speed -= 10;
        if (this.speed < 0) {
            this.speed = 0;
            console.log(`${this.name} đã dừng lại. Không thể giảm tốc độ`);
            return;
        }
        console.log(`${this.name} đã giảm xuống ${this.speed} km/h`);
    }
    showSpeed(): void {
        console.log(`Tốc độ hiện tại của ${this.name} là ${this.speed} km/h`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;
    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo(): void {
        console.log(`Xe đạp: ${this.name}, Tốc độ: ${this.speed} km/h, ID: ${this.id}, Số bánh răng: ${this.gear}`);
    }
}

let bike = new Bicycle("Xe đạp thể thao", 20, 1, 5);
bike.showInfo();
bike.speedUp();
bike.showSpeed();
bike.slowDown();
bike.showSpeed();