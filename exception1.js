//exceptions
function promptdirection(question)
{
	let result = prompt(question);
	if(result.toLowerCase() == "left") return "L";
	if(result.toLowerCase() == "right") return "R";
	throw new Error("Invalied direction" + result);
}
function look()
{
	if(promptdirection("Which way ?") == "L")
	{
		return "a house";
	}
	else
	{
		return "two angry bears";
	}
}
try
{
	console.log("you see ?",look());
}
catch(error)
{
	console.log("something went wrong:" + error);
}