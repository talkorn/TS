let literally = 10;
let number: number;
let str: string;
let bool: boolean;
let anyVal: any;

const calc = (a: number, b: number, c: string): number => {
  switch (c) {
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "+":
    default:
      return a + b;
  }
};

console.log(calc(50, 50, "aaaaaaaaaaaaaaaaaa"));

anyVal = 5;
anyVal = "str";
anyVal = {};

let unionTyp: number | string | boolean;
unionTyp = 5;
unionTyp = "hello world from ts";

// let obj: object;
// obj = { name: "kenny", age: 8 };
// obj.name;

let user: { name: string; age: number };
user = {
  name: "kenny",
  age: 8,
};

let user2: { name: string; age: number; gender?: boolean };

user2 = {
  name: "kenny",
  age: 8,
};

interface User {
  name: string;
  age: number;
  gender?: boolean;
  adress?: object;
}

let user3: User;
let user4: User;
user4 = {
  name: "kenny",
  age: 5,
};

let adress: { city: string; st: string; houseNumber: number };
let user5: User;

user5 = {
  name: "kenny",
  age: 5,
  adress: { city: "tel-aviv", st: "gghdgfd", houseNumber: 14 },
};
let ArrAnimal: string[];
enum AnimalType {
  dogs,
  fish,
  birds,
  other,
}
interface Animals {
  name: string;
  age: number;
  type: AnimalType;
}
let animal1: Animals = {
  name: "guri",
  age: 7,
  type: AnimalType.dogs,
};
let animal2 = {
  name: "igur",
  age: 9,
  type: AnimalType.fish,
};
console.log("animal1", animal1, "animal2", animal2);

export {};
