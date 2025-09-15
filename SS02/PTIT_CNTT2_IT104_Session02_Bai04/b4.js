const checkElement = (arr, element) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}

console.log(checkElement([1, 2, 3, 4, 5], 3)); 
console.log(checkElement([1, 2, 3, 4, 5], 6));
console.log(checkElement(['apple', 'banana', 'cherry'], 'banana'));
