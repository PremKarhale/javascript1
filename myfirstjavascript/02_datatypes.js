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

console.log(myobj) //calling myobj

let myfunc =function(){
    console.log("hello world ")
}

myfunc()//calling myfunction


/*
************************************************ TYPES OF PRIMITIVE OR NON PRIMITIVE DATATYPES ***********************

PRIMITIVE TYPES [STACK] , NON PRIMITIVE TYPES [HEAP]
isme CHANGE COPY ME HOTA HAI ,  CHANGE ORIGINAL VALUE ME HOTA HAI ..


*/
let original = 'prem'
let copy =original;
copy='sak'                        //primitive data types 
console.log(copy);
console.log(original);


let user ={
    emailid :'username123@gmail.com', // abi jo mera user variable he na vo stack me store hoga or jo obj hai vo heap me store hoga as a reference to that variable .                          
    name :'prem',
    userId : 34


}

let user2 = user;
user2.name = 'sakshi'

console.log(user)//sakshi      // non primitive type data type me ham object ki original value ko hi change kar dete he 
console.log(user2)//sakshi



