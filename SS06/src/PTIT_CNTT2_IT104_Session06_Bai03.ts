// abstract method chỉ có trong abstract class, không có thân hàm chỉ khai báo, bắt buôc các class con phải triển khai
// method thông thường có thể ở bất kì class nào, có thân hàm, không bắt buộc các class con phải triển khai

abstract class Shape {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    abstract getSize(): number; 
}

class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize(): number {
        return this.width * this.height;
    }
    // Phương thức này là bắt buộc phải có trong class con vì nó là abstract method
}

let rectangle = new Rectangle("Rectangle", 5, 10);
console.log(`Shape: ${rectangle.getName()}, Size: ${rectangle.getSize()}`);
