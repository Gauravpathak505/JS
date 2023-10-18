const user={
userName:'gaurav',
price:'999',

welcomeMessage:function(){

    console.log(`this is my name${this.userName} , price is ${this.price}`)
    // console.log(this);
}


}

// user.welcomeMessage()
// user.userName='hanuman' // here context will changed 
// user.welcomeMessage()

// if we want to show what are output of this keyword in node enviroment

// console.log(this);

// function chai(){
// let username='gaurav'
//     console.log(this.username) // this keyword not in use function
// }
// chai()

//  chai=() =>{
//     let username='gaurav'
//         console.log(this.username)
//     }
// chai()

// explicit return 

// addTwoNum=(num1 , num2)=>{
//     return num1+num2;
// }
// console.log(addTwoNum(3,4));

// implicit return

// addTwoNum=(num1,num2)=> num1+num2
// console.log(addTwoNum(9,4));

//  2nd way implicit return

addTwoNum=(num1,num2)=> (num1+num2)
console.log(addTwoNum(8,4));