const checkParity = (number) => {
    if (typeof number !== 'number' || isNaN(number)) {
        return `Not a number`;
    }
    
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

let number = +prompt('Enter a number:');
console.log(checkParity(number));