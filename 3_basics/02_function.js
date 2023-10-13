// shopping cart adding value through rest operator
// noramal way to shoe value 

// function calculateCartPrice(num){
//     return num;
// }
// console.log(calculateCartPrice(200 , 300 , 400 ,600));/ only one value can take 

// through rest operator
// function calculateCartPrice(...num){ // resr operator 
//     return num;
// }
// console.log(calculateCartPrice(200 , 300 , 400 ,600));

// 3rd way 
function calculateCartPrice(val1,val2 ,...num){
    return num;
}
console.log(calculateCartPrice(200 , 300 , 400 ,600)); // val 1 take first value and val2 take 2nd value and rest of value go in to rest opetaor 

// obeject passed through function

const user={
name:"gaurav",
price:200
}

function handleUser(anyObject){
    console.log(`the username is ${anyObject.name}, the price is ${anyObject.price}`)
}
// handleUser(user)
handleUser({
    name:'sam',
    price:399
})

// array passed throgh function

const myNewArray=[200,330,440,700]

function returnSecondValue(getArray){
    return getArray[2];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400]))