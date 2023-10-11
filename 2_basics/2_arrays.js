let marvel_heros=["thor", "ironman","spiderman"];
let dc_heros=["superman","flash", "batman"];
// join the array with method
// marvel_heros.push(dc_heros); // push method not joint the array 
// console.log(marvel_heros);

// let my_new_heros=marvel_heros.concat(dc_heros); // this is using in old days 
// console.log(my_new_heros);
//new way to add is spread method
let All_New=[...marvel_heros ,...dc_heros];
console.log(All_New);

// array within array solve this flat method 

const arr1=[1,2,3,[4,5,6,[8,9,7],8,[9,1],9],6];
const aar2= arr1.flat(Infinity);
console.log(aar2);

// any value convert into array
console.log(Array.isArray("gaurav"));
console.log(Array.from("gaurav")); // from mathod convert in to array
console.log(Array.from({name:'gaurav'})); // interesting for interview

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3)); // of method is also used for convet in to array 