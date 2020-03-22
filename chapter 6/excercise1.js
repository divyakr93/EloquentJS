//excercise 1 vector type
class Vec
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
	}
	plus(anothervec)
	{
		return new Vec(this.x + anothervec.x, this.y + anothervec.y)
	}
	minus(anothervec)
	{
		return new Vec(this.x - anothervec.x, this.y - anothervec.y)
		
	}
	get length()
	{
		return Math.sqrt(this.x * this.y * this.y);
	}
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);

