//dynamically craeting RegExp objects
let name = "harry";
let txt = "Harry is a suspicious character";
let regexp = new RegExp("\\b("+ name + ")\\b", "gi");
console.log(txt.replace(regexp, "$1"));


//back slashes before any charater

let name = "dea+hl[]rd";
let txt = "this dea+hl[]rd guy is super annoying";
let escaped = name.replace(/[\\[.*?(){|^$]/g, "\\$&");
let regexp = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(txt.replace(regexp, "_$&_"));
