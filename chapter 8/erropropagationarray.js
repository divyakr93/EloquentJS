//eroor propagation 2
function lastelementofarray(array)
{
	if(array.length == 0 )
	{
		return {failed: true};
	}
	else
	{
		return {element: array[array.length - 1]};
	}
}
console.log(lastelementofarray([1, 3, 3, 5, 6]));