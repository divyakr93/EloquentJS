//sets of characters
console.log(/[0123456789]/.test("in 1991"));
console.log(/[0-9]/.test("in 1992")); 

let datetime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(datetime.test("01-03-2000 01:17"));
console.log(datetime.test("01-jan-2000 01:17"));

//testing except binary
let notbinary = /[^01]/;
console.log(notbinary.test("110000100100"));
console.log(notbinary.test("1100001121"));
