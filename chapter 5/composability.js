//composability
function charactercount(script)
 {
 	return script.ranges.reduce((count, [from, to]) => {
 		return count + (to - from);
 	}, 0);
 }
let biggest = null;
for(let script of SCRIPTS)
{
if(biggest == null || charactercount(biggest) < charactercount(script)){
	biggest = script;
}
}
console.log(biggest);
