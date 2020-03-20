//js program with class Map
let ages = new  Map();
ages.set("Bories", 39);
ages.set("Julia", 49);
ages.set("Liang", 59);
 console.log(`Julia is ${ages.get("Julia")}`);
 console.log(`is Jacks age known?`, ages.has("Jack"));
 console.log(ages.has("tostring"));

console.log({x: 1}.hasOwnProperty("x"));
console.log({x: 1}.hasOwnProperty("toString"));