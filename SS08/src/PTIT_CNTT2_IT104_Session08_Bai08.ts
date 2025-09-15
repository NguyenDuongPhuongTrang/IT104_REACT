interface IUser{
    name: string;
    age: number;
    job: string;
}

const partialUpdate = (obj: IUser, updates: Partial<IUser>): IUser => {
    return {...obj, ...updates};
};

let person = {name: "Kiên", age: 18, job: "Student"};
console.log(partialUpdate(person, {age: 19}));


