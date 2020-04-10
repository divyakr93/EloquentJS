//greed
function stripcomments(code)
{
	return code.replace(/\/\/.*|\/\*[^]*\//g, "");
}
console.log(stripcomments("1 + /* 2 */3"));
console.log(stripcomments("x =10; // ten!"));
console.log(stripcomments("1 /* a */+/* b */ 1"))