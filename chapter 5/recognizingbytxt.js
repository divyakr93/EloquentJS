//recognizing text
function countby(items,groupname)
{
	let counts = [];
	for(let item of items)
	{
		let name = groupname(item);
		let known = counts.findIndex(c => c.name == name);
		if(known == -1)
		{
			counts.push({name, count: 1});
		}
		else
		{
			counts[known].count++;
		}
	}
	return counts;
}
console.log(countby([1, 2, 3, 4, 5], n => n > 2));