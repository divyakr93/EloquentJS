//testing
function test(label, body)
{
	if(!body())
		console.log(`failed:${label}`);
}
test("covert latin to uppercase",() => { 
	return "hello".toUpperCase() == "HLLO" });
test("convert greek text to upprcase", () => { 
	return "xaitete".toUpperCase() == "XAIPTE"});