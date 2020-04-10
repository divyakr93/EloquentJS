//looping over matches
let input = "a string with 3 number in it ... 42 and 48";
let number = /\b\d+\b/g;
let match;
while( match = number.exec(input))
{
	console.log("found", match[0], match.index);
}