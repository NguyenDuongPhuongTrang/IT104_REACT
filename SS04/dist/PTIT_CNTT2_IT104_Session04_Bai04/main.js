"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let input;
const checkInput = (value) => {
    if (typeof value === 'string') {
        value.split('');
        return console.log(`Chuỗi có ${value.length} ký tự`);
    }
    else if (typeof value === 'number') {
        return console.log(`Số ${value} là số ${value % 2 === 0 ? 'chẵn' : 'lẻ'}`);
    }
    else {
        return console.log('Không hợp lệ');
    }
};
input = 'Hello World';
checkInput(input);
input = 12345;
checkInput(input);
