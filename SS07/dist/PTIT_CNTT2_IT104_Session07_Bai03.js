"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    printName() {
        return console.log(`Animal name: ${this.name}`);
        ;
    }
}
class Cat extends Animal {
    constructor() {
        super("Mèo");
    }
    makeNoise() {
        return console.log(`Meo meo`);
    }
}
class Dog extends Animal {
    constructor() {
        super("Chó");
    }
    makeNoise() {
        return console.log(`Gâu gâu`);
    }
}
let cat = new Cat();
let dog = new Dog();
cat.printName();
cat.makeNoise();
dog.printName();
dog.makeNoise();
