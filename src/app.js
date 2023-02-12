let literally = 10;
let number;
let str;
let bool;
let anyVal;
const calc = (a, b, c) => {
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
let unionTyp;
unionTyp = 5;
unionTyp = "hello world from ts";
let user;
user = {
  name: "kenny",
  age: 8,
};
let user2;
user2 = {
  name: "kenny",
  age: 8,
};
let user3;
let user4;
user4 = {
  name: "kenny",
  age: 5,
};
let adress;
let user5;
user5 = {
  name: "kenny",
  age: 5,
  adress: { city: "tel-aviv", st: "gghdgfd", houseNumber: 14 },
};
let ArrAnimals;
var AnimalType;
(function (AnimalType) {
  AnimalType[(AnimalType["dogs"] = 0)] = "dogs";
  AnimalType[(AnimalType["fish"] = 1)] = "fish";
  AnimalType[(AnimalType["birds"] = 2)] = "birds";
  AnimalType[(AnimalType["other"] = 3)] = "other";
})(AnimalType || (AnimalType = {}));
let animal1 = {
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
