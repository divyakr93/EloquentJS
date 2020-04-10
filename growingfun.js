//growing function
function printinventory(chickens, cows)
{
	let cowstring = String(cows);
	while(cowstring.length < 3)
	{
		cowstring = "0" + cowstring;
	}
	console.log(`${cowstring} cows`);
	let chickenstring = String(chickens);
	while(chickenstring.length < 3)
	{
		chickenstring = "0" + chickenstring; 
	}
	console.log(`${chickenstring} chickens`);
}
printinventory(7, 1);