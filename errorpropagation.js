//eroor propagation
function promptpropagation(question)
{
	let result = Number(prompt(question));
	if(Number.isNaN(result))
		return null;
	else
		return result;
}
console.log(promptpropagation("how many tree you see ?"));

// some clarification
//eroor propagation - without Number function 
function promptpropagation(question)
{
	let result = prompt(question);
	if(isNaN(result))
		return null;
	else
		return result;
}
console.log(promptpropagation("how many tree you see ?"));
//Number function only assosiated with isNaN()
//eroor propagation
function promptpropagation(question)
{
	let result = prompt(question);
	if(Number.isNaN(result))
		return null;
	else
		return result;
}
console.log(promptpropagation("how many tree you see ?"));