//higher order function
function greaterthan(n)
{
	return m => m > n;
}
let graet = greaterthan(10);
graet(15);

//function that can change other functions

function noisy(f)
{
	return (...args) => {
		console.log("calling with", args);
		let result = f(...args);
		console.log("called with",args,", returned", result);
		return result;
	};
}
noisy(Math.min)(3,2,1);

// function that provide new types of control flow

function unless(test, then)
{
	if(!test) then();
}
repeat(3, n => {
	unless(n % 2 ==1, () => {
		console.log(n, "is even");
	});
});
