//repeating parts of characters
console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));

//matching string with question marks
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
console.log(neighbor.test("neighbor"));
console.log(neighbor.test("neighbbour"));

//provide limit to repeating digits
let datetime = /\d{1,2}-\d{1,2}-\d{4} \d{1}:\d{2}/;
console.log(datetime.test("01-01-2000 1:11"));
console.log(datetime.test("1-02-1000 1:11"));
let datetime = /\d{1,2}-\d{1,2}-\d{4,}\d{1}:\d{2}/;