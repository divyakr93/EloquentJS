//methods
let rabbit = {};
rabbit.speak = function(line)
{
	console.log(`the rabbit says ${line}`);
};

let whiterabbit = {type: "white", speak1};
let hungryrabbit = {type: "hungry", speak1};
function speak1(line)
{
	console.log(`the ${this.type} rabbit says '${line}'`);
}
whiterabbit.speak1("oh my ears and whiskers, " + "how late its getting!");
hungryrabbit.speak1("I could use carrot right now");

// using call method ('this' implementation)

let whiterabbit = {type: "white", speak1};
let hungryrabbit = {type: "hungry", speak1}; function speak1(line)
{
	console.log(`the ${this.type} rabbit says '${line}'`);
}
speak1.call(hungryrabbit,"brup");

// arrow function with this keyword

function normalize()
{
	console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});

