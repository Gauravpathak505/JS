const score=400
console.log(score);
const balance=new Number(100);
console.log(balance);
// change in to string
console.log(balance.toString().length);
console.log(typeof balance);
console.log(balance.toFixed(2));// its is used to add last two 0 after the . dot
const Num=24223.8877432
console.log(Num.toPrecision(10)); // this is used to take a number from last to end 
const hundred=100000000000;
console.log(hundred.toLocaleString('en-IN')); // this is used to count the number in mannerway

// **************************  Maths  ***************************
// console.log(Math);
// console.log(Math.abs(-5)); // ,this is used to convert negative no into positive no
// console.log(Math.round(4.5));//  this is used to round the figure 
// console.log(Math.ceil(4.2)); // this is used to round the no in max
// console.log(Math.floor(4.3)); // round in minimum
// console.log(Math.min(2,5,6,7)); // used to find minimum value 
// console.log(Math.max(9,8,5,2,4)); // used to find the maximum value 

console.log(Math.random());
console.log(Math.floor(Math.random()*10) +1);

const max=10;
const min=5;
console.log(Math.floor(Math.random() *(max-min +1)+min));
