//the mail trucks rout
const mailrout = ["alices home", "johns home", "ernies house", "bobs house", "post office"];
function routerobot(state, memory)
{
	if( memory.length == 0)
	{
		memory = mailrout;
	}
	return {direction: memory[0],memory: memory.slice(1)};
}
console.log(routerobot("alices home", 5));