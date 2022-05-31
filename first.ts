let age: number = 50;
age = 150;
const isFamous: boolean = false;
let famous: boolean = true;

let personName: string = "Rahim";
let Name: string = "Rahim";

// function add(num1:number |string, num2:number|string){
//     return num1 + num2;
// }
// add(33,714);
// add('Rahim','Jabbar');

function fullName(firstName: string, lastName: string): string {
  return firstName + " " + lastName;
}
const userData: string = fullName("Rahim", "uddin");

function doubleIt(num: number): void {
  const result = num * 2;
  console.log(result);
}
const output = doubleIt(40);
console.log("output", output);

const multiply = (x: number, y: number): number => x * y;
console.log(multiply(7, 41));

let multiply1: (x: number, y: number) => number;

const numbers = [1, 3, 4, 5, 6, 7, 11];
numbers.push(22);

// Array
const friends: string[] = ["rahim", "karim", "jobbar,jamal"];
let megaName: string = "";
for (let i = 0; i < friends.length; i++) {
  const friend: string = friends[i];

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

const friendName: { name: string; age: number } = {
  name: "Rahim",
  age: 20,
};
friendName.name;

let players: {
  club: string;
  salary: number;
} = {
  club: "psg",
  salary: 200000,
};

interface Player {
  club: string;
  name: string;
  salary: number;
  wife?: string;
  isPlaying: boolean;
}

let neymar: Player = {
  club: "PSG",
  name: "Neymar",
  salary: 500000000,
  isPlaying: true,
};

let messy: Player = {
  club: "PSG",
  name: "Messy",
  salary: 500000000,
  isPlaying: true,
};

function getBonusSalary(player: Player, friend: string[]) {
  return player.salary * 0.2;
}
const newPlayer = { salary: 20000 };
getBonusSalary(messy, ["Salmon"]);

class Person {
  name: string;
  private _Partner: string;
  readonly fatherName: string;
  // salary: number;
  constructor(name: string, father: string) {
    this.name = name;
    this._Partner = name;
    this.fatherName = father;
  }
  getName(): string {
    return this.name + "-" + this.fatherName;
  }
}
const sam = new Person("Rahim", "Jamil");
console.log("Name", sam.name);
sam.name = "Balam";
// sam.fatherName = "Robin";
