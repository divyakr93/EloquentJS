var range = function(start, end)
{
	var arr = [];
	for(let i= 0;i<end;i++)
	{
		arr.push(i);
	}
	return arr;
};
function sum(arr)
{
	var total =0;
	for(let i =0;i<arr.lenght;i++)
	{
		total += i;
	}
return total;
}
function range1(strat,end,step)
{
	var arr[];
	if(step == 0)
	{
		for(let i=start;i<=end;)
		{
			arr.push(i);
			i = i + step;
		}
	return arr;
	}
	else
	{
		for(let i= start;i >=end;)
		{
			arr.push(i);
			i = i + step;
		}
		return arr;
	}

}
console.log(range());
console.log(sum());
console.log(range1());
