// function addtwoNum(num1 , num2){
// console.log(num1+num2);
// }
// addtwoNum(3,4)

// way 2

function addtwoNum(num1 , num2){
    // let rejult=num1+num2;
    // return rejult;
    return num1+num2;
    }
    rejult=addtwoNum(3,4)
    // console.log(rejult);

    // way 3

    function loginUserMessage(username){
        // if(username===undefined ) // way 1
        if(!username)                // way 2 & way 1 are same    
        {
            console.log("please enter the value ");
            return
        }

        return `${username} , just logged in`
    }
//    console.log (( loginUserMessage('gaurav')));
console.log (( loginUserMessage("gaurav")));