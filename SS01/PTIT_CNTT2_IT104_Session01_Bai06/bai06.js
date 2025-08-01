const createUser = (name, age = 18, role = "user") => {
    return {
        Name: name,
        Age: age,
        Role: role
    };
}

console.log(createUser("Dev"));
console.log(createUser("Nguyen Van A", 25, "Admin"));
