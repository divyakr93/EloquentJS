//excercise1 flattening
var arr = [[1, 2, 3], [4, 5], [6, 7]];
console.log(arr.reduce(flat, current) =>
	flat.concat(current), arr);
