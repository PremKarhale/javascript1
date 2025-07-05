const UserEmail = ' ' // [] or string ' ' seperated by the space in betweenis consideredas truthy values 
if(UserEmail){
    console.log('got usr email')   //truthy values assumes that  "$%" is true 
}
else{
    console.log('not find user email')
}

/* 
FALSY VALUES : 0 , -0 , BigInt 0n , null , undefined , Nan , ""
Truthy Values : '0' , 'false' , " " , function(){} , 
*/

const emptyobj={
    user: 'prem', 
    age: 34
};
console.log(Object.keys(emptyobj))     // aese Object ko Array me convert kiya jata hai 
console.log(Object.values(emptyobj))    // arrays of values 

console.log(Object.keys(emptyobj).includes('user')) // one way of using operations of the arrays ==>'INCLUDES' 
                                                     // !! keep in mind that here user is an String 



if(Object.keys(emptyobj).length===2){
    console.log(Object.keys(emptyobj).length);
}


// terniary operator :
// condition ? true:false

const teaprice = 100;
teaprice >=80 ? console.log('tea price is more than 80 '): console.log('tea price is less than 80')


