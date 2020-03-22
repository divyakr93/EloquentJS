var range = function(start, end)
{
	var arr = [];
	for(let i= 0;i < end;i++)
	{
		arr.push(i);
	}
	return arr;
};
function sum(arr)
{
	var total = 0;
	//var arr = [];
	for(let i = 0;i < arr.length;i++)
	{
		total = total + arr[i];
	}
return total;
}
function range1(start,end,step)
{
	var arr = [];
	if(step > 0)
	{
		for(let i = start;i <= end;)
		{
			arr.push(i);
			i = i + step;
		}
	return arr;
	}
	else
	{
		for(let i = start;i >= end;)
		{
			arr.push(i);
			i = i + step;
		}
		return arr;
	}

}
console.log(range(0,6));
console.log(range1(0, 6, 2));
console.log(sum([12,65,23,78]));
