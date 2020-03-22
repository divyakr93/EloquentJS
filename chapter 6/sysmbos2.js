//symbols 
const toStringsymbol = Symbol("toString");
Array.prototype[toStringsymbol] = function()
{
	return `${this.length} cm of blue yarn`;
};
console.log([1, 2].toString());
console.log([1, 2][toStringsymbol]());


let stringObject =
{
	[toStringsymbol]() { return `a jute rope`;}
};
console.log(stringObject[toStringsymbol]());
