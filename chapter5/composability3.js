//
let total = 0;
let count = 0;
for(let script of SCRIPTS)
{
	if(script. living)
	{
		total += script.year;
		count += 1;

	}
}
console.log(Math.round(total / count));