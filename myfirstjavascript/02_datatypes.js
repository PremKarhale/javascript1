let state;
//number = 2 to the power 45
// bigint
//string =>""                           //ALL ARE DATATYPES 
//boolean = true/false 
//null = >standalone value 
//undefined => 
//symbol => unique 
//object 
let Boolean = 45.3; // use case of typeof  ... it is used to know which value is stored inside the variable


console.log(typeof undefined);//undefined
console.log(typeof null );//object 

console.log( typeof String); //function 
console.log( typeof Boolean);//number 
console.log( typeof Number);//function 



let number1 = 'prem'
console.log( typeof number1)
let convertittono = Number(number1)
console.log( typeof convertittono)

// on the basis of memory location and memory accssing datatypes are devided into two types PRIMITIVE TYPES AND NON PRIMITIVE TYPES 

/*
1. primitive types (7 types)
string , Number , Boolean , null , undefinied , symbol , BigInt 

2. NON primitive datatypes (3) Reference datatypes on the basis of memory assessing 
Array , Object , Function 

*/

let hero =['prem','sakshi','papa','ajay'] //Array

let myobj = {
    name: 'prem',
    age: 20,
    qualification :'BE-IT' ,

}
console.log(myobj)

let myfunc =function(){
    console.log("hello world ")
}
myfunc()

