//function with parameters
const power = function(base, exponent)
{
	let out = 1;
	for(let i = 1;i <= exponent;i++)
	{
	 out *= base;
	}
	return out;
};
console.log(power(2,10));