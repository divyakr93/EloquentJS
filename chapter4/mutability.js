//mutability
let obj1 = {value: 100};
let obj2 = obj1;
let obj3 = {value: 100};
console.log(obj1 == obj2);
cnosole.log(obj1 == obj3);
obj1.value = 15;
console.log(obj2.value);
console.log(obj3.value);