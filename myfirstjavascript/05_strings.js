const name = 'premKarhale'
const age = 20
let newname = '   sakshi karhale   '
let emailid = 'prem@123gmail.com%23yahho.com'

// console.log(name + age + " value")

// console.log(`hey my name is ${name} and  my age is ${age}`); //string interpolation 


console.log(name.charAt(4));
console.log(name.indexOf('K')); // !! REMEMBER javascript is a case sensetive language so k != K \

console.log(name.slice(0,4)); //prem

console.log(name.slice(1,4)); //rem

console.log(newname.trim()); //sakshi karhale   !!REMOVES WIDE SPACES

console.log(emailid.replace('%23','-'))

console.log(emailid.includes('premx'))//false   


    




