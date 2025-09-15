let a: string = "2";
let b: number = 2;

if (a == b){
    console.log("True");
}else {
    console.log("False");
}

if (a === b){
    console.log("True");
}else {
    console.log("False");
}

// So sánh lỏng ("==") trả về true vì chỉ kiểm tra giá trị chứ không kiểm tra kiểu dữ liệu.
// So sánh chặt ("===") trả về false vì kiểm tra cả giá trị và kiểu dữ liệu, và chúng không khớp.