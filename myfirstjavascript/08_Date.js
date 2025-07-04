let mydate = new Date()   // date is instianciated as an object 
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString()) // It is the best 
console.log(mydate.getFullYear())


console.log(typeof mydate)  //object 

const mycreateddate = new Date(2025, 3, 23);         //created my own date ;
console.log(mycreateddate.toDateString())



const mycreateddate1 = new Date("02-24-2025")
console.log(mycreateddate1.toLocaleString());


const timestamp = Date.now(); //for timestamp
console.log(timestamp)    //Gives in miliseconds 


console.log(Math.round(Date.now() / 1000))   //sec 

// decimal no hatane ke liye Math.round , Math.ceil , Math.floor  use karte hai 




const date = new Date();
console.log(`today's Date & Day is ${date.toDateString()} and time is ${date.toTimeString()}`); // date can be used in this way 
