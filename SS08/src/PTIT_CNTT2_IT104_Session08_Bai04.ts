interface Person{
    name: string;
    age: number;
}

interface Job{
    job: string;
    specialized: string;
}

const combine = <T, U>(obj1: T, obj2: U): T & U =>{
    return {...obj1, ...obj2};
}

const person: Person = {name: "Trang",age: 18};
const job: Job = {job: "Student", specialized: "IT"};

console.log(combine(person, job));
