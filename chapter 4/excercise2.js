//reversing an array
function reverseaarray(arr)
{
	var res = [];
	for(let i = arr.length - 1;i >= 0;i--)
	{
		res.push(arr[i]);
	}
	return res;
}
function reversearrayinplace(arr)
{
	var tmp;
	for( let i =0; i< Math.floor(arr.length - 1) / 2;i++)
	{
		tmp = arr[i];
		arr[i] =arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = tmp;
	}
	return arr;
}
console.log(reverseaarray([1,2,3,4,5,6]));
console.log(reversearrayinplace([1,2,3,4,5,6]));