const myfirstfunc = function first() {
    console.log('p')
    console.log('R')
    console.log('E')
    console.log('M')
}
myfirstfunc()

// function addTwoNumber(num1 , num2){
//     console.log(num1 + num2);

// } 

// addTwoNumber( 4, 5);

// function addTwoNumber(num1 , num2){
//  let  result = num1 + num2;
//  return result;
// }
// const result = addTwoNumber(4,5);
// console.log(result)

function addTwoNumber(num1, num2) {
    return num1 + num2  // return usekarke jo kuch karta hu usko variable me store karke vo variable print kara ja skata hai 
}
const result = addTwoNumber(4, 5);
console.log(result)



function loggedInUsser(username){
if(!username){
    console.log("First enter your name");
    return;
}

   return `${username} has just logged in `
}
console.log(loggedInUsser('"prem"'));  // "prem" has just logged in
console.log(loggedInUsser()); // undefined 


const user ={
    username:'prem',
    age:21,
    isLoggedIn:true
}

function handleobject(anyobject){
    console.log(`user name is ${anyobject.username} and his age is ${anyobject.age}`)

}
handleobject(user); 

handleobject({
    username : 'prem',
    age : 20

});


const myNewarray = [200,500,600,678]

function returnsecondvalue(AnyArray){
    return AnyArray[1];
}

console.log(returnsecondvalue(myNewarray)) //500






