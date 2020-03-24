//persistant data
let obj = Object.freeze({value: 5});
obj.value = 10;
console.log(obj.value);
console.log(obj.value = 100);
//?? => 100