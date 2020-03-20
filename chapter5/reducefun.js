//summarising with reduce
function reduce(array, combine, start)
{
	let current = start;
	for(elements of array)
	{
		current =combine(current,elements);
	}
	return current;
}
console.log(reduce([1, 2, 3, 4],(a, b) => a + b), 0);
//console.log([1, 2, 3, 4].reduce((a, b) => a + b));


// find most characters from script
 function charactercount(script)
 {
 	return script.ranges.reduce((count, [from, to]) => {
 		return count + (to - from);
 	}, 0);
 }
 console.log(SCRIPTS.reduce((a, b) =>{ return charactercount(a) < charactercount(b) ? b : a}));