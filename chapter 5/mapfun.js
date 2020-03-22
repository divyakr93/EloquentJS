//transforming with map
var SCRIPTS = [1,2,3,3]
function map(array,transform)
{
	let mapped = [];
	for(let elements of array)
	{
		mapped.push(transform(elements));
	}
	return mapped;
}
let rtlscript = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlscript, s => s.name));