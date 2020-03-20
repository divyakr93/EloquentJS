//function with constructor
function Rabbit(type)
{
	this.type = type;
}
Rabbit.prototype.speak = function(line)
{
	console.log(`the ${this.type} rabbit says ${line}`);
};
let weirdrabbit = new Rabbit("weired");
 weirdrabbit.speak("hungry");

 console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
 console.log(Object.getPrototypeOf(weirdrabbit) == Rabbit.prototype);
  console.log(typeof(weirdrabbit));
   console.log(typeof(Rabbit)); 
  console.log(Object.getPrototypeOf(weirdrabbit)); 
  console.log(Rabbit.prototype);