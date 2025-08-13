"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        return this.width * this.height;
    }
}
let rectangle = new Rectangle("Rectangle", 5, 10);
console.log(`Shape: ${rectangle.getName()}, Size: ${rectangle.getSize()}`);
