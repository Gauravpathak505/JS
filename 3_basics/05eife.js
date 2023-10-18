// immediately invoke function expression

// with name eife 
(function chai(){
    console.log('db connected');
})(); // if you write two eife program in single program must you have put smeicolon 

//  without name eife
((name)=>{
    console.log(`db two connected ${name}`);
})('gaurav')