//simulation 
function runrobt(state, robot, memory)
{
	for(let turn = 0; ; turn ++)
	{
		if(state.parcels.length == 0)
		{
			console.log(`Done in ${turn} turns`);
			break;
		}
		let action = robot(state, memory);
		state = state.move(action.direction);
		memory = action.memory;
		console.log(`moved to ${action.direction}`);
	}
}