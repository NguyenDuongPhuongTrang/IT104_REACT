const a = 5;
const arr = [1,2,3];
a = 10;
arr.push(4);
console.log(a); 
console.log(arr);

// a là biến nên không thể thay đổi, gán giá trị mới sẽ báo lỗi
// arr trỏ tới địa chỉ nên có thể thay đổi nội dung