const accountId = 1234;
var accountholdername = 'prem'
let accountpassoward = 4536;
accountcity = 'maharashtra';
  
// accountId =453;
console.log(accountId);
accountholdername = 'harsh';
accountpassoward = 2156;
accountcity = 'pune';
console.table([accountId, accountholdername, accountpassoward, accountcity]);
/*
const variable cannot be changed in the javascript , whereas other all 
the function can be changable 
and we only use let variables not "var "  !!! REMEMBER


*/

function showMessage() {
    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
        console.log(y);       //clearly shown that var are function scoped  and let and const are block scoped 
        console.log(z);
    }
    console.log(x);


}

showMessage();