//overriding derived properties
class Rbbit
{
	constructor(type)
	{
		this.type = type;
	}
}
let killerrabbit = new Rabbit("killer");
let blackrabbit = new Rabbit("black") 

Rabbit.prototype.teeth = "small";
console.log(killerrabbit.teeth);
killerrabbit.teeth = "long, sharp, and bloddy";
console.log(killerrabbit.teeth);
console.log(blackrabbit.teeth);
console.log(Rabbit.prototype.teeth);
console.log(Array.prototype.toString == Object.prototype.toString);
console.log([1,2].toString());
console.log(Object.prototype.toString.call([1,2]));