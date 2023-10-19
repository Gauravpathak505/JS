const myArr=[1,2,3,4,5,6,7]
for (const iterator of myArr) { // for of loop on array
    //console.log(iterator);
}

const map=new Map()
map.set('in',"india")
map.set('fr', "france")
map.set('ru','russia')
map.set('po', "poland")

//console.log(map);

for (const [key , value] of map) {
   // console.log(`the keyid is ${key} = the value is ${value}`);
}

// object with for of 
const myObject={
    name:'gaurav',
    age:26,
    sex:'male'
}
// for (const details of myObject) { object is not iteratble by for of loop
//     console.log(details);
// }

// for in 
for (const key in myObject) {
   console.log(`${key} : ${myObject[key]}`);
}