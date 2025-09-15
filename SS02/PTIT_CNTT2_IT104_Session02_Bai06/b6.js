const checkEndString = (str, ending) => {
    if (typeof str !== 'string' || typeof ending !== 'string') {
        return false;
    }
    return str.endsWith(ending) ? true : false;
};

console.log(checkEndString("Hello, World!", "Hello"));
console.log(checkEndString("Hi there!", "there!"));

