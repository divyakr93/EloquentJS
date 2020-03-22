//abstracting repetition
function repetition(n)
{
	for(let i=0;i< n;i++)
	{
		console.log(i);
	}
}
repetition(10);

//using function as just values to rept function

function rept(n, action)
{
	for(let i=0;i< n;i++)
	{
		action(i);
	}
}
rept(5, console);

//dont have to pass predefined function to repeat
let label = [];
repeat(5, i => {
	label.push(`Unit ${i + 1}`);
});
console.log(label);

console.log(label);