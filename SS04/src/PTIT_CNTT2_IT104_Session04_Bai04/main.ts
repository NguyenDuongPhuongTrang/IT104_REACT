let input: string | number;

const checkInput = (value: string | number)=>{
    if (typeof value === 'string') {
        value.split('');
        return console.log(`Chuỗi có ${value.length} ký tự`);
    } else if (typeof value === 'number') {
        return console.log(`Số ${value} là số ${value % 2 === 0 ? 'chẵn' : 'lẻ'}`);
    } else {
        return console.log('Không hợp lệ');
    }
}

input = 'Hello World';
checkInput(input);
input = 12345;
checkInput(input);