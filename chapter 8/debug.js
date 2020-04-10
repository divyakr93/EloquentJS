//debugging
function numbertostring(n, base = 10)
{
	let result = "", sign ="";
	if(n < 0 )
	{
		sign = "-";
		n = -n;
	}
	do
	{
		result = String(n % base) + result;
		n =n / base;
	}while(n > 0);
	return sign + result;
}
console.log(numbertostring(13, 10));

//without error
//debugging
function numbertostring(n, base = 10)
{
	let result = "", sign ="";
	if(n < 0 )
	{
		sign = "-";
		n = -n;
	}
	do
	{
		result = String(n % base) + result;
		n =Math.floor(n / base);
	}while(n > 0);
	return sign + result;
}
console.log(numbertostring(13, 10));