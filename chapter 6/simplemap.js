//maps
let ages = {
	Boris: 33,
	Liang: 67,
	Julia: 56
};
console.log(`Julia is ${ages["Julia"]}`);
console.log(`is Jacks age known ? `, "Jack" in  ages);
console.log("is toString's age known?","tostring" in ages);
console.log("toString" in Object.create(null));

