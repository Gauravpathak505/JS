// let isLoggedIN=true
// if (isLoggedIN) {
//     console.log('user logged in');
// }

// let balance=700

// if (balance<100) {
//     console.log('balance is less than 200');
// }
// else if (balance<499) {
//     console.log('balance is less than 500');
// }
// else{
//     console.log("balance is more than 500");
// }

// multiple condition check
const isUserloggedIn=true
const debitCard=true
const EmailId=false
const GmailId=false
if (isUserloggedIn && debitCard && EmailId || GmailId) {
    console.log("user can purchases the goods");
}
else{
    console.log("user can't purchase");
}