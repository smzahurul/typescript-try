"use strict";
let age = 50;
age = 150;
const isFamous = false;
let famous = true;
let personName = "Rahim";
let Name = "Rahim";
// function add(num1:number |string, num2:number|string){
//     return num1 + num2;
// }
// add(33,714);
// add('Rahim','Jabbar');
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
const userData = fullName("Rahim", "uddin");
function doubleIt(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleIt(40);
console.log("output", output);
const multiply = (x, y) => x * y;
console.log(multiply(7, 41));
let multiply1;
const numbers = [1, 3, 4, 5, 6, 7, 11];
numbers.push(22);
// Array
const friends = ["rahim", "karim", "jobbar,jamal"];
let megaName = "";
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log("friends Large");
// Object
const friends1 = {
    name2: "Rahim",
    age: 20,
};
// friends.name2 = "Rahim";
const friendName = {
    name: "Rahim",
    age: 20,
};
friendName.name;
let players = {
    club: "psg",
    salary: 200000,
};
let neymar = {
    club: "PSG",
    name: "Neymar",
    salary: 500000000,
    isPlaying: true,
};
let messy = {
    club: "PSG",
    name: "Messy",
    salary: 500000000,
    isPlaying: true,
};
function getBonusSalary(player, friend) {
    return player.salary * 0.2;
}
const newPlayer = { salary: 20000 };
getBonusSalary(messy, ["Salmon"]);
class Person {
    // salary: number;
    constructor(name, father) {
        this.name = name;
        this._Partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name + "-" + this.fatherName;
    }
}
const sam = new Person("Rahim", "Jamil");
console.log("Name", sam.name);
sam.name = "Balam";
// sam.fatherName = "Robin";
