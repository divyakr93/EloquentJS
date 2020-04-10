//closure
function outer()
{
	let outervar = 100;
	function inner()
	{
		console.log(outervar);
	}
	return inner;
}
let innr = outer();
innr();