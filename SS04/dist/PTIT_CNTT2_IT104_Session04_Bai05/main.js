"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const staff = {
    name: "John Doe",
    age: 30,
    employeeId: 12345,
    department: "Engineering"
};
const printStaffInfo = (staff) => {
    console.log(`${staff.name}(${staff.age}). Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
};
printStaffInfo(staff);
