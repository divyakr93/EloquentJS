//grouping sub expressions
let cartooncarry = /boo+(hoo+)+/i;
console.log(cartooncarry.test("Boohoooohoohoo"));
console.log(cartooncarry.test("bhook"));	