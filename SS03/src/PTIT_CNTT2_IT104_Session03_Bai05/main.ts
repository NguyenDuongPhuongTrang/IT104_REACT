let firstName: string = "phương";
let lastName: string = "trang";

firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

let fullName: string = firstName + " " + lastName;
console.log(fullName);
