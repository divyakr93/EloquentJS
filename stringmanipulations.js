
//string manipulations
let str = "hello world";
let str1 = "u";
let str2 = "  hello ";
let str3 = "birds specialize in stombing";
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
console.log(`length of str2 ${str2.length}`);
console.log(`trim out spaces---> ${str2.trim()}`);
console.log(`length of str2 ${str2.length}`);
console.log(`index of w is---> ${str.indexOf("w")}`);
console.log(`llo from str---> ${str.slice(2, 4)} \n ${str}`);
console.log(`index of w is---> ${str.indexOf("u")}`);
console.log(`padding 1 ---> ${String(5).padStart(4, "1")}`);
console.log(`splitting str3 --- > ${str3.split(" ")} \n ${str3}`);
//console.log(`joining string --->${str3.join(" . ")} \n ${str3}`);
console.log(`to repeat a purticular string---> ${str2.repeat(4)}`);
console.log(`length of str3 ${str3.length}`);
console.log(`${str + str1 + str2}`);
