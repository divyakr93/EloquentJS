//growing function
function zeropadd(number, width)
{
	let numstring = String(number);
	while(numstring.length < width)
	{
		numstring = "0" + numstring;
	}
	return numstring;
	
}
function farminventory(cows, chickens, pigs)

	console.log(`${zeropadd(cows, 4)} cows`);
	console.log(`${zeropadd(chickens, 3)} chickens`);
	console.log(`${zeropadd(pigs, 5)} pigs`);
}
farminventory(1,4,8);