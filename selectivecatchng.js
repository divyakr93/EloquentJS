//selective cashing
for(;;)
{
	try
	{
		let dir = promptdirection("where ?");
		console.log("you choose", dir);
		break;
	}
	catch(e)
	{
		console.log("not valied direction ! try agaian")
	}
}