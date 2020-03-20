//polimorphism
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
Rabbit.prototype.toString = function()
{
	return `a ${this.type} rabbit`;
};
console.log(String(blackrabbit)); console.log(String(killerrabbit));