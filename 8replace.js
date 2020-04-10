//replace method
console.log("papa".replace("p", "m"));
console.log("borobudur".replace(/[ou]/, "a"));
console.log("borobudur".replace(/[ou]/g, "a"));
console.log("Liskov, Barbara\nCarthy,John\nWlader,Phlp".replace(/(\w+), (\w+)/g,"$2 $1"));
let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g,str => str.toUpperCase()));