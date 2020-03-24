//
function randompicks(array)
{
	let choice = Math.floor(Math.random() * array.length);
	return array[choice];
}
function randomrobot(state)
{
	return {direction: randompick(roadgraph[state.place])};
}
randompick([1,2,3,4,5,6,7,,8,9]);