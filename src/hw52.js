let num;
let obg;
let name1;
let boole;
let adress;
num = 1;
obg = {};
name1 = "jhgj";
boole = true;
adress = "hjvh";
let ArrAnimal;
var AnimalType;
(function (AnimalType) {
    AnimalType[AnimalType["dogs"] = 0] = "dogs";
    AnimalType[AnimalType["fish"] = 1] = "fish";
    AnimalType[AnimalType["birds"] = 2] = "birds";
    AnimalType[AnimalType["other"] = 3] = "other";
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
