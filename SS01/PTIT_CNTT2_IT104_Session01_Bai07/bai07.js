const sum = (...numbers) => {
    const result = numbers.map( arr =>{
        return arr.reduce((sum, num) => sum + num, 0);
    });
    return result;
}

console.log(sum([1,2], [6,7,8], [12,8]));
