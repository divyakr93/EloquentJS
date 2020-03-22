//a property is written to using setter
class Temprature
{
	constructor(celcius)
	{
		this.celcius = celcius;
	}
	get fahernheit()
	{
		return this.celcius * 1.8 + 32;
	}
	set fahernheit(value)
	{
		this.celcius = (value - 32) / 1.8;
	}
	static fromfahernheit(value)
	{
		return new Temprature(value - 32) / 1.8;
	}
}
let temp = new Temprature(22);
console.log(temp.fahernheit);
temp.fahernheit = 86;
console.log(temp.celcius);