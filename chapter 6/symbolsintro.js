//symbols introduction
class Rbbit
{
	constructor(type)
	{
		this.type = type;
	}
	speak(line)
	{
		console.log(`the ${this.type} rabbit says '${line}'`);
	}
}
let killerrabbit = new Rabbit("killer");
let blackrabbit = new Rabbit("Black"); 

let sym = Symbol("name");
console.log(sym == Symbol("name"));
console.log(sym);
Rabbit.prototype[sym] = 55;
console.log(blackrabbit[sym]);