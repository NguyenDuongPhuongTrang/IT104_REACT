"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get Width() {
        return this.width;
    }
    set Width(value) {
        if (value > 0) {
            this.width = value;
        }
        else {
            throw new Error("Chiều rộng phải lớn hơn 0");
        }
    }
    get Height() {
        return this.height;
    }
    set Height(value) {
        if (value > 0) {
            this.height = value;
        }
        else {
            throw new Error("Chiều cao phải lớn hơn 0");
        }
    }
    getPrimeter() {
        return 2 * (this.width + this.height);
    }
    getArea() {
        return this.width * this.height;
    }
}
let rectangle = new Rectangle(5, 10);
console.log(`Chiều rộng: ${rectangle.Width}`);
console.log(`Chiều cao: ${rectangle.Height}`);
console.log(`Chu vi: ${rectangle.getPrimeter()}`);
console.log(`Diện tích: ${rectangle.getArea()}`);
console.log(`Sau cập nhật:`);
rectangle.Width = 7;
rectangle.Height = 12;
console.log(`Chu vi mới: ${rectangle.getPrimeter()}`);
console.log(`Diện tích mới: ${rectangle.getArea()}`);
