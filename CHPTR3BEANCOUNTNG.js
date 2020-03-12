//chapter3 excercise3

function countchar(str,ch)
{	
	let count = 0;
	for(let i=0;i<str.length - 1;i++)
	{
	if(str[i] == ch) 
	count ++;
	}
	return count;
}
console.log(countchar("BEANCOUNTING", 'N'));
function countB(str)
{
	return countchar(str)
}
console.log(countB("BeanCouning"));

