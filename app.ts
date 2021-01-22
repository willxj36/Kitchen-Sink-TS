let myName: string ="Will"; //creates a variable containing a string representing my name

const numStates: number = 50; //creates a constant (can't be changed later) that contains the number of states in the US

let sum: number = 5 + 4; //creates a variable that contains the value of the sum of 4 and 5

function sayHello () {
    alert("Hello World!");
}
sayHello();

function checkAge(firstName: string, age: number) {
    if(age < 21) {
        alert( "Sorry " + firstName + ", you aren't old enough to view this page!" )
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let veggies: string[] = ["cucumber", "onion", "peppers"];

for(let i = 0; i < veggies.length ; i++) {
    console.log(veggies[i]);
}

let pet: {name: string, breed: string} = {
    name: "Koda",
    breed: "Akita mix"
};

console.log(pet.name);
console.log(pet.breed);

let ethan: {name: string, age: number} = {
    name: "Ethan",
    age: 29
};
let ezekiel: {name: string, age: number} = {
    name: "Ezekiel",
    age: 19
};
let bobby: {name: string, age: number} = {
    name: "Bobby",
    age: 20
};
let susieQ: {name: string, age: number} = {
    name: "Susie Q",
    age: 54
};
let elvis: {name: string, age: number} = {
    name: "Elvis",
    age: 82
};

let people: {name: string, age: number}[] = [ethan, ezekiel, bobby, susieQ, elvis];

for(let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
};

function getLength(word: string): number {
    return word.length;
};

let lengthResult: number = getLength("Hello World");

if (lengthResult % 2 == 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
};