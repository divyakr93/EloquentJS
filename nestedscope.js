//nested scope
const hummus = function(factor)
{
	const ingredient = function(amount, unit, name)
	{
	let ingredientamount = amount * factor;
	if(ingredientamount > 1)
	{
	unit += "s";
	};
	console.log(`${ingredientamount} ${unit} ${name}`);
	}
	ingredient(1, "can", "chickpiece" );
	ingredient(2,"cup","lemon juice");
};
hummus(2);