// Immediately invoked function Expression (IIFE)


//Named IIFE
(function chai (){         
console.log(`DB CONECTED `)
})();   //IIFE IS USED TO INVOKED THE FUNCTION IMMEDIATLY AFTER THE EXECUTION  && ALSOO TO ELIMINATE THE PROBLEM CAUSED BY THE GOLBAL VARIABLE 

         // ; is must  to know that where actually the function is ended 

( (name)=>{
  console.log(`chai and ${name}`)
})('code');    //IIFE FOR THE ARROW FUNCTION 



console.log(
    
((parameter)=>{

    return parameter*3;     //calling the function immediately after the execution 
})(4)
);






