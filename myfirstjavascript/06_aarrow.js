const myobj = {
    username:'prem',
    age:20,
    email:'pem12@gmail.com',
    
    website: function(){
        console.log(`${this.username} welcome to website`)
        console.log(this) //it referes to the current context of the obj
    }


}
myobj.website();
myobj.username ='sam';
myobj.website()


const chai = () =>{
    console.log(this) //{}    //arrow function 

}
chai()


const addtwo = (num1,num2)=>{
return num1+ num2                 // one way of writing the arrow function 
                                    //agar parenthis dala to 'Return' use karna padta hai or nahi dala to nahi use karna padta 
}
console.log(addtwo(3,4))



//!!imp..(implicit return)
const subtwo = (num1,num2)=>(num1 - num2 )    //another  way of writing the arrow function 
                                              // !!! IMPORTANT no need to write return 
console.log(subtwo(3,4))


const addthree = (num1,num2,num3)=>({
    username:'prem',                     //Eg : of OBJECT INSIDE ARROW FUNCTION 
    age:20
})
console.log(addthree(2,3,4))