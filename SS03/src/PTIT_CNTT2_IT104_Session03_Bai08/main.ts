let a: string = "10";
let b: number = 5;

const sum = (a: number | string, b: number | string) => {
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        console.log(`Giá trị không hợp lệ`);
    }else {
        return Number(a) + Number(b);
    }
}

const subtraction = (a: number | string, b: number | string) => {
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        console.log(`Giá trị không hợp lệ`);
    }else {
        return Number(a) - Number(b);
    }
}

const multiply = (a: number | string, b: number | string) => {
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        console.log(`Giá trị không hợp lệ`);
    }else {
        return Number(a) * Number(b);
    }
}

const quotient = (a: number | string, b: number | string) => {
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        console.log(`Giá trị không hợp lệ`);
    }else if (Number(b) === 0) {
        console.log(`Không thể chia cho 0`);
    } else {
        return Number(a) / Number(b);
    }
}

console.log(`Tổng: ${sum(a, b)}`);
console.log(`Hiệu: ${subtraction(a, b)}`);
console.log(`Tích: ${multiply(a, b)}`);

let result = quotient(a, b);
result !== undefined ? console.log(`Thương: ${result}`) : result;