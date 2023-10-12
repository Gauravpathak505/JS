const cource={
    courceName:'developer',
    price:'999',
    courceInstructor:'gaurav'
}

// object call in normal ways 
cource.courceInstructor;
// object call  in distructor way
const{courceInstructor: instructor}=cource;
// console.log(courceInstructor);
console.log(instructor);