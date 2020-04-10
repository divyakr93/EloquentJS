//growing function
function printzeropaddedwithlabel(number, label)
{
	let numstring = String(number);
	while(numstring.length < 3)
	{
		numstring = "0" + numstring;
	}
	console.log(`${numstring} label`);
	
}
function farminventory(cows, chickens, pigs)
{
printzeropaddedwithlabel(cows, "cow");
printzeropaddedwithlabel(chickens, "chicken");
printzeropaddedwithlabel(pigs,"pig");
}
farminventory(1,4,8);