const coding=['java','js','rubby','cpp','c']

// coding.forEach( function(item){
//     console.log(item);
// })
// arrow function

// coding.forEach( (val)=>{
//     console.log(val);
// })

// normal function

function greet(val){
//console.log(val);
}
//greet(coding)
coding.forEach(greet)

coding.forEach( (val , index, arr)=>{
    //console.log(val , index, arr);
})

// tgis is rlated to object call by foreach method 

const myCoding=[
    {
        name:'java',
        filename:'java'
    },
    {
        name:'javaScript',
        filename:'js'
    },
    {
        name:'python',
        filename:'py'
    }
]

myCoding.forEach((item)=>{
console.log(item.filename)
}
)