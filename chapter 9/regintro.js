//regular expression intro testing for matches
let re1 = new RegExp("abc");
let re2 = /abc/;
console.log(re1.test("abcdef"));
console.log(re2.test("abcdef"));
console.log(re1.test("asdfgh"));
console.log(re2.test("asdfgh"));
console.log(re2.test("abdc"));
console.log(/abc/.test("abcde"));
console.log(/abc/.test("adbc"));