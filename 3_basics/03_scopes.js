// let a=20
// const b =30
// var c=40
// console.log(a);
// console.log(b);
// console.log(c);

var c=300 // this is a problem of var they print out of scope also 

if(true){
    let a=20
const b =30
var c=40
}
// console.log(a); the value not print out of scope({})
// console.log(b);the value not print out of scope({})
console.log(c); //the value print out of scope({})

// closer function
// child function can access parent function but parent can not acces child function

 function one(){
    const username='gaurav'
// console.log(website); parent function can't access child property
     function two(){
        const website='youtube'
        console.log(username); // child function can access parent property 
    }
    // console.log(website); this is not access out of child scope
    two();
 }
 one();


 //###################interesting###################
console.log(one(5)) // in this function we acn access before 
 function one(num1){
    return num1+1;
 }
 

 const two=function(num2){
    return num2+2
 }
 console.log(two(8));
