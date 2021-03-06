// Hamster

class Hamster {
    constructor (name) {
        this.owner = '';
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
        console.log("squeak squeak");
    } 
    eatFood() {
        console.log("nibble nibble");
    }
    getPrice() {
        return this.price
    }
}

// Person

class Person {
    constructor (name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
        console.log("name: ", this.name);
    }
    getAge() {
        console.log("current age: ", this.age);
    }
    getWeight() {
        console.log("current weight ", this.weight);
    }
    greet() {
        console.log( "You're name is ", this.name);
    }
    eat() {
        this.weight++;
        this.mood++;
    }
    exercise() {
        this.weight--;
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount+=10;
    }
    buyHamster(Hamster) {
        this.hamsters.push(Hamster);
        this.mood+=10;
        this.bankAccount -= Hamster.getPrice();
        // Not sure if this is right. The first two I know are right, just the last one
        // is throwing me off.
    }
}
// Creating a story

const timmy = new Person('Timmy');

for (let i=o; i < 6; i++){
    timmy.ageUp();
} timmy.getAge();

for (let i=0; i < 6; i++) {
    timmy.eat();
} timmy.getWeight();

for (let i=0; i < 6; i++) {
    timmy.exercise();
} timmy.getWeight();

for (let i=0; i < 10; i++) {
    timmy.ageUp();
} timmy.getAge();

const gus = new Hamster("Gus");
gus.owner = "Timmy";
console.log(gus);
timmy.buyHamster(gus);
console.log( "Timmy's Hamsters: ", timmy.hamsters);

for (let i=0; i < 16; i++) {
    timmy.ageUp();
} timmy.getAge();

for (let i=0; i < 3; i++) {
    timmy.eat();
} timmy.getWeight();

for (let i=0; i < 3; i++) {
    timmy.exercise();
} timmy.getWeight();


