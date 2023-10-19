const userEmail=[]
// if (userEmail) {
//     console.log("user Logged in");
// }
if (userEmail.length!=0) {
    console.log("user Logged in");
}
else{
    console.log("user not Logged in");
}

let obj={}
// check here truthy or falsy of object 
if (Object.keys(obj).length!=0) {
    console.log("object is not a empty")
}
else{
    console.log("object is empty");
}

// nullish coalescing operatot (??) null/ undefined 

let val1;
// val1=10??50
// val1=null??50
// val1=undefined??50
val1=undefined??'gaurav'


console.log(val1)

// terniary operator (?) condition true / false

const iceCreamPrice=100
iceCreamPrice <=80 ? console.log('less than 80') :console.log('more than 80')