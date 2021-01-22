var myName = "Will"; //creates a variable containing a string representing my name
var numStates = 50; //creates a constant (can't be changed later) that contains the number of states in the US
var sum = 5 + 4; //creates a variable that contains the value of the sum of 4 and 5
function sayHello() {
    alert("Hello World!");
}
sayHello();
function checkAge(firstName, age) {
    if (age < 21) {
        alert("Sorry " + firstName + ", you aren't old enough to view this page!");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
var veggies = ["cucumber", "onion", "peppers"];
for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}
var pet = {
    name: "Koda",
    breed: "Akita mix"
};
console.log(pet.name);
console.log(pet.breed);
var ethan = {
    name: "Ethan",
    age: 29
};
var ezekiel = {
    name: "Ezekiel",
    age: 19
};
var bobby = {
    name: "Bobby",
    age: 20
};
var susieQ = {
    name: "Susie Q",
    age: 54
};
var elvis = {
    name: "Elvis",
    age: 82
};
var people = [ethan, ezekiel, bobby, susieQ, elvis];
for (var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}
;
function getLength(word) {
    return word.length;
}
;
var lengthResult = getLength("Hello World");
if (lengthResult % 2 == 0) {
    console.log("The world is nice and even!");
}
else {
    console.log("The world is an odd place!");
}
;
