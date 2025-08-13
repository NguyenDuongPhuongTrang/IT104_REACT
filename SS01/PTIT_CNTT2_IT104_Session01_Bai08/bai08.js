const arr1 = [1, 2, 3, 4, 5];
const arr2 = [99, 100];
const index = 3;

arr1.splice(index, 0, ...arr2);
console.log(arr1);