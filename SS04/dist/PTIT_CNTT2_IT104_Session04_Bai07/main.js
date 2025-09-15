"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processInput(input) {
    if (typeof input === "string") {
        if (/^\d+$/.test(input)) {
            const num = Number(input);
            console.log(num * num);
        }
        else {
            const letters = input.match(/[a-zA-Z]/g);
            const count = letters ? letters.length : 0;
            console.log(`${count} ký tự chữ cái`);
        }
    }
    else if (typeof input === "number") {
        if (input < 2) {
            console.log("Không phải số nguyên tố");
            return;
        }
        for (let i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                console.log("Không phải số nguyên tố");
                return;
            }
        }
        console.log("Là số nguyên tố");
    }
    else if (typeof input === "boolean") {
        console.log(input
            ? "Giá trị là true - tiến hành xử lý"
            : "Giá trị là false - dừng xử lý");
    }
}
processInput("123");
processInput("abc123!");
processInput(7);
processInput(10);
processInput(true);
processInput(false);
