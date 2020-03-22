//array with its functions
let arr = [2, 4, 6, 8, 10,12];
let arrodd = [1, 3, 5, 7];
console.log(`maximum of arr ${max(...arr)}`);
console.log(`Initial array ---> ${arr}`);
console.log(`index of arr element 4 ---> ${arr.indexOf(4)} `);
console.log(`last index of arr of 4 ----> ${arr.lastIndexOf(4)}`);
console.log(`after popout an elemnt from arr--> ${arr.pop()} \n ${arr}`);
console.log(`after pushing new element to an arr--> ${arr.push(14)} \n ${arr}`);
console.log(`shiting an array element--> ${arr.shift()} \n ${arr}`);
console.log(`unshifting array element---> ${arr.unshift(0)} \n ${arr}`);
console.log(`slice out arr with strat end end indices---> ${arr.slice(0,3)} \n ${arr}`);
console.log(`slice arr with excludiding end indices---> ${arr.slice(4)}  \n${arr}`);
console.log(`concat arr with arrodd--->${arr+"," + arrodd}` );
console.log(`checkin for element 10 in arr---->  ${arr.includes(10)}`);
