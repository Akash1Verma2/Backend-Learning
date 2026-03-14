// Factory Functions
// function PersonMaker(name,age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         }
//     }

//     return person;
// }


// Constructors 
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);

// }

// Person.prototype.talk = function () {
//     console.log(`Hi, ,my name is ${this.name}`);
// }

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     talk(){
//         console.log(`Hi, ,my name is ${this.name}`);
//     }
// }

// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 25);

class Mammal {   
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }

    eat(){
        console.log("I am eating");
    }
}

class Dog extends Mammal {
    constructor(name){
        super(name);
    }

    bark(){
        console.log("woff..");
    }

    eat(){
        consol.log("dog is eating");
    }
}

class Cat extends Mammal {
    constructor(name) {
        super(name);
    }

    meow(){
        console.log("mewo..")
    }
}