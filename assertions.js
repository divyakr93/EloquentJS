//aasertions
function firstelemnt(array)
{
	if(array.length == 0)
	{
		throw new Error("first elemnt called with []");
	}
	return array[0];
}
console.log(firstelemnt([1, 2, 3, 4, 5]));

// assertions with length 0 
//aasertions
function firstelemnt(array)
{
	if(array.length == 0)
	{
		throw new Error("first elemnt called with []");
	}
	return array[0];
}
console.log(firstelemnt([]));