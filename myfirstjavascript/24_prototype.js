// prototype set of all the  methods which are present inside the strings , arrays , objects 
// we can create our own prototype by creating the new method inside the strings , arrays and objects 
// prototypes presents inside the objects are universally  present inside the arrays or strings 
//(jo bhi prototypes objects me present hote hai vo sare prototypes strings or arrays me bhi accessiable rahenge )

const username = 'prem karhale '
// console.log(username.length) //  is the prototype present in a string 
console.log(username.trim().length) //acutal way 

String.prototype.truelength = function(){
    console.log(this.trim().length)    // created a new prototype "truelength"
}
username.truelength()

