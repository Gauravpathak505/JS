// for (let index = 0; index <= 10; index++) {
//     const element = index
//     console.log(index);
    
// }

// for(i=1;i<=10;i++)
// {
//     if (i===5) {
//         console.log( "5 is best no");
//     }
//     let ele=i
//     console.log(ele)
// }

// table of 1 to 10 number

for (let i = 1; i <=10; i++) {
    
    // console.log(i)
    for (let j = 1; j <= 10; j++) {
       
       // console.log(`the j no is ${j} , the i no is ${i}`);
        //console.log(i +'*' +j + '=' + i*j);
    }
    
}

const myArray=['jairam', 'prakash', 'sitaram', 'jaikumar']
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// break vs continue

for (let i = 0; i < 20; i++) {
    
    if (i==5) {
        console.log('detected');
        break // when statement is true break terminate from loop 
    }
    console.log(i);
    
}
for (let i = 1; i < 20; i++) {
    
    if (i==5) {
         console.log('detected');
        continue // skip only one time after further value printed 
    }
    console.log(i);
    
}