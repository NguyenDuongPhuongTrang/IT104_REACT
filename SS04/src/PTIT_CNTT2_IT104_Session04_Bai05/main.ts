interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: number;
    department: string;
}

type StaffMember = Person & Employee;

const staff: StaffMember = {
    name: "John Doe",
    age: 30,
    employeeId: 12345,
    department: "Engineering"
};

const printStaffInfo = (staff: StaffMember) => {
    console.log(`${staff.name}(${staff.age}). Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
}

printStaffInfo(staff);