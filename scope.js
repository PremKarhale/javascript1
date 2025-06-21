

// if (true){
//     let a = 23;
//     const b = 4;
//      var c = 345;
//      console.log(a) 
// console.log(b) 
// }
// console.log(a) //error     let is block scoped 
// console.log(b) //error    const is block scoped 
// console.log(c) //345       // variable is global scoped 


// function one (){
//     const username = 'prem'
//     const age = 20;

//     function two (){
//         const website = 'youtube';
//         console.log(username);     // child can acces the variables in the parent function 
//     }
//     // console.log(website) //error ,scope is blocked 
//     two(); //print  --> prem
//     console.log(age);
// }
// one()


area() //hey 
 function area(){
    console.log('hey') // if we have written a function like this than it can be accessed in any no of way 
}


one() //error
const one = function area(){
    console.log('hey')              // but if we have written it in the variable than , it can be accessed only after initialisation
}
