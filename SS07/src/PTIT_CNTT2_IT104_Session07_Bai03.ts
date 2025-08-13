abstract class Animal{
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract makeNoise(): void;
    printName(): void {
        return console.log(`Animal name: ${this.name}`);
        ;
    }
}

class Cat extends Animal{
    constructor (){
        super("Mèo");
    }
    makeNoise(): void {
        return console.log(`Meo meo`);
    }
}

class Dog extends Animal{
    constructor (){
        super("Chó");
    }
    makeNoise(): void {
        return console.log(`Gâu gâu`);
    }
}

let cat = new Cat();
let dog = new Dog();

cat.printName();
cat.makeNoise();
dog.printName();
dog.makeNoise();

