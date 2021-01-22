let myName="Will"; //creates a variable containing a string representing my name

const numStates= 50; //creates a constant (can't be changed later) that contains the number of states in the US

let sum= 5 + 4; //creates a variable that contains the value of the sum of 4 and 5

function sayHello () {
    alert("Hello World!");
}
sayHello();

function checkAge(firstName, age) {
    if(age < 21) {
        alert( "Sorry " + firstName + ", you aren't old enough to view this page!" )
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let veggies= ["cucumber", "onion", "peppers"];

for(i = 0; i < veggies.length ; i++) {
    console.log(veggies[i]);
}

let pet = {
    name: "Koda",
    breed: "Akita mix"
};

console.log(pet.name);
console.log(pet.breed);

let ethan = {
    name: "Ethan",
    age: 29
};
let ezekiel = {
    name: "Ezekiel",
    age: 19
};
let bobby = {
    name: "Bobby",
    age: 20
};
let susieQ = {
    name: "Susie Q",
    age: 54
};
let elvis = {
    name: "Elvis",
    age: 82
};

let people = [ethan, ezekiel, bobby, susieQ, elvis];

for(i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
};

function getLength(word){
    return word.length;
};

let lengthResult = getLength("Hello World");

if (getLength % 2 == 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
};