// object literals
let mysyb=Symbol("key1")

const jsuser={
name:'gaurav',
[mysyb]:"mykey", // this is way to define symbol 
"fullname":'gaurav pathak',
age:18,
email:'gaurav@gmail.com',

}

// console.log(jsuser.email);

// console.log(jsuser["email"]);
// console.log(jsuser["fullname"]); // this is way to call the object  attributre 
// console.log( jsuser[mysyb]);

// some points
jsuser.email='gaurav@facebook.com';
//Object.freeze(jsuser); // here we freeze the object after freeze object we can't change any attributes value
// jsuser.email="gaurav@chatgpt.com" // after freeze the value will not changed 
// console.log(jsuser["email"])

jsuser.greeting =function(){
console.log("hii this is greeting fumction");
}
jsuser.greetingtwo=function(){
    console.log(`my name is ${this.name} , my full name is ${this.fullname}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());