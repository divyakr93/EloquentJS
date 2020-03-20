//class as expression - omit class name
let object = new class 
{
	getword() 
	{
		return "hello";
	}
};
console.log(object.getword());