// singleton object 

//const tinderUser=new Object()
//object literals
const tinderUser={}
tinderUser.name='gaurav';
tinderUser.id='123abc';
tinderUser.isLoggedIn=false;
// console.log(tinderUser)

// object inside objects
const newUser={
    fullname:{
        userFullname:{
            name:'shiva',
            add:'kailas'
        }
    }
}
// console.log(newUser.fullname.userFullname.name);

// merger object
const obj1={1:'a',2:'b'}
const obj2={3:'f',4:'y'}
const obj3={5:'l',6:'c'}
// how to merge 
// 1. add two normal way
const obj4={obj1,obj2,obj3}
// 2 assign the value 
// const obj5=Object.assign({} , obj1,obj2,obj3) //assign operator
const obj5={...obj1,...obj2,...obj3}  // spread operator
console.log(obj5);

// create a object
const user=[
    {
        id:'123abcr',
        name:'krishna'
    },
    {
        id:'1234tr',
        name:'hanuman'

    }
]
user[1].name
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // only give key object output
console.log(Object.values(tinderUser));// only give value object output
console.log(Object.entries(tinderUser));// give key and value pair output

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // this is used for check property is avail or not
