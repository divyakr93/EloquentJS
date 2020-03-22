//inheritance
class Matrix
{
	constructor(width,height, element = (x, y) => undefined)
	{
		this.width = width;
		this.height = height;
		this.content = [];
		for(let y = 0;y< height;y++)
		{
			for(let x = 0;x < width;x++)
			{
				this.content[y * width + x] = element(x, y);
			}
		}
class Symmetric extends Matrix
{
	constructor(size, element = (x, y) => undefined)
	{
		super(size, size, (x, y) => 
		{
			if(x < y)
				return element(y, x);
			else
				return element(x, y);
		});
	}
	set(x, y, value)
	{
		super.set(x, y, value);
		if(x != y)
		{
			super.set(y, x, value);
		}
	}
}
let matrix = new Symmetric(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));
console.log(new Symmetric(2) instanceof Symmetric);
console.log(new Symmetric(2) instanceof Matrix);
console.log(new Matrix(2, 2) instanceof Symmetric);
console.log([1] instanceof Array);