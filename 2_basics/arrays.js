// arrays 
const myArr=new Array(0,1,2,3,4,5);

// array methods
// myArr.push(6);
// myArr.pop();
// myArr.unshift(7); // to use for adding on first index
// myArr.shift(); // to delete from first index
// console.log(myArr.includes(7));// to check value is present in array or not if yes then output is true else false
// console.log(myArr.length)
// console.log(myArr);
// console.log(myArr.indexOf(2));

const newArr=myArr.join(); // to change in string
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// diffrence of slice and splice // this is not manipulate the original array
const myNew1=myArr.slice(1 ,4);
console.log(myNew1);
console.log("b",myArr);

const myNew2=myArr.splice(1,4); // this is manipulate the original array 
console.log(myNew2);
console.log("c" ,myArr);