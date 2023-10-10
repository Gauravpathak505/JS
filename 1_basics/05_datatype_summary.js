// Primitive data type
// number , string , boolean, null , undefined ,bigint , symbols

let accoumtId=123
console.log(typeof accoumtId); // output: number

const Id=Symbol('123');
const Id2=Symbol('123');

console.log(Id===Id2);

console.log(typeof Id); // output : symbol

// refrence datatype (non primitive datatype )
// arrays , object , function

// array example

const heros=['shaktiman', 'nagaraj','dodo'];
console.log(heros);

// object 

let obj={
    name:'gaurav',
    age:12,
    address:'patna'

}
console.log(obj);

// functions
const myFunction=function(){
    console.log("hello world");
}
myFunction();

//***********************memory allocation *****************************//

// primitive datatype : Stack memory   copy of variable 
// non primitive data : Heap memory    refrence of original value

let Accountdet="gaurav@gmail.com"; // Accountdet is save on stack
let Anotherone= Accountdet;
Anotherone='ramesh@gmail.com'
Accountdet='shiva@gmail.com'
console.log(Anotherone);
console.log(Accountdet);

let object1={
    name :'shiva'
    
}
object1.name='bhola';
console.log(object1.name);