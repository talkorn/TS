let num: number;
let obg: object;
let name1: string;
let boole: boolean;
let adress: string;
num = 1;
obg = {};
name1 = "jhgj";
boole = true;
adress = "hjvh";

let ArrAnimal: string[];
enum AnimalType {
  dogs,
  fish,
  birds,
  other,
}
interface Animals {
  name: string;
  age: string;
  type: AnimalType;
}
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
