//looping with new concept 
object JOURNAL = {
	events: ["game","cycling","gardening","coffe"], 
	squirral: false
	};
function journalevents(journel)
{
	let events = [];
	for(let entry of journal)
	{
		for(let event of entry.events)
		{
			if(!events.include(event))
			{
				events.push(event);
			}
		}
	}
	return events;
}
console.log(journalevents(JOURNAL));

