//deep comparison
function deepequal(a, b)
{
	if(a == b)
	{
		return true;
	}
	if(a == null || typeof a != "Object" || b == null || typeof b != "Object")
	{
		return false;
	}
	let keysofa = Object.Keys(a), keysofb = Object.Keys(b);
	if(keysofa.length != keysofb.length)
	{
		return false;
	}
	for(let key of keysofa)
	{
		if(!keysofb.inclides(key) || ! deepequal(a[key], b[key]))
		{
			return false;
		}
	}
}
console.log(deepequal({a: "[]"}))