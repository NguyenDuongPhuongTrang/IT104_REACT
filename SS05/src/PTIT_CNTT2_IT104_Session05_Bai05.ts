class Rectangle{
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    get Width(): number {
        return this.width;
    }

    set Width(value: number) {
        if (value > 0) {
            this.width = value;
        } else {
            throw new Error("Chiều rộng phải lớn hơn 0");
        }
    }

    get Height(): number {
        return this.height;
    }

    set Height(value: number) {
        if (value > 0) {
            this.height = value;
        } else {
            throw new Error("Chiều cao phải lớn hơn 0");
        }
    }
    
    getPrimeter(): number {
        return 2 * (this.width + this.height);
    }

    getArea(): number {
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



