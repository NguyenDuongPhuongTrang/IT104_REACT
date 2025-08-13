interface Geometry {
    calcutateArea(): number;
    calcutatePerimeter(): number;
}

class Circle implements Geometry {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calcutateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calcutatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Geometry {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calcutateArea(): number {
        return this.width * this.height;
    }

    calcutatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

let circle = new Circle(5);
console.log(`Circle Area: ${circle.calcutateArea().toFixed(2)}`);
console.log(`Circle Perimeter: ${circle.calcutatePerimeter().toFixed(2)}`);
let rectangleShape = new Rectangle(4, 6);
console.log(`Rectangle Area: ${rectangleShape.calcutateArea()}`);
console.log(`Rectangle Perimeter: ${rectangleShape.calcutatePerimeter()}`);