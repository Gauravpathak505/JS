const name='gaurav';
const repocount=20;
console.log(`my name is ${name} my repo count is ${repocount}`); // this is new approach to write code in (``)

// here we are learning string some methods 
const gameName=new String('gaurav');
const newString=gameName.substring(0 ,4); // this method is used to take some part of original string
console.log(newString);
const anotherName=gameName.slice(-5 ,5);
console.log(anotherName);

const newname=new String('  pathak  ')
console.log(newname);
console.log(newname.trim());

const Url='gaurav.com/gaurav%20/pathak';
console.log(Url);
console.log(Url.replace('%20','-'));
console.log(Url.includes('pathak'));
