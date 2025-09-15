"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    calcutateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calcutatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calcutateArea() {
        return this.width * this.height;
    }
    calcutatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
let circle = new Circle(5);
console.log(`Circle Area: ${circle.calcutateArea().toFixed(2)}`);
console.log(`Circle Perimeter: ${circle.calcutatePerimeter().toFixed(2)}`);
let rectangleShape = new Rectangle(4, 6);
console.log(`Rectangle Area: ${rectangleShape.calcutateArea()}`);
console.log(`Rectangle Perimeter: ${rectangleShape.calcutatePerimeter()}`);
