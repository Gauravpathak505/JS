// date methods

// let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString('en-IN'));
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(typeof myDate);

// let myCreateDate=Date.now();
// console.log(myCreateDate);
// console.log(myCreateDate.getTime);
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getDate());
console.log(newDate.getHours());
console.log(newDate.getUTCDate());
console.log(newDate.setUTCDate(newDate));

newDate.toLocaleString('default'{
    weekday:"long"
});
