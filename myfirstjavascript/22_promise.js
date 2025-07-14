//promise is used to handeled the "asynchronous operations" such as API calls , setTimeout(), DB requests ,file reading 

// Promise 1 
const promise1= new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('asyn function executes')//promise is callback fucntion which takes two parametrs resolve,reject
        resolve()
    }, 1000);
})

promise1.then(()=>{    //once promise resolves than promise1.then() executes 
    console.log('promise resolved and asyn executed ')
})

// Promise 2
new Promise((resolve,reject)=>{
    setTimeout(() => { //asyn operation
        console.log('asyn task complete')
        resolve()
    },1000);
}).then((result)=>{
    console.log('asyn resolved')  //call back function which directly points to that promise which is resolved 
})


// Promise3 
const promise3 =new Promise((resolve,reject)=>{
    setTimeout(() => {
     resolve({user: 'prem karhale',eamilID: 'abc@gmail.com' , age: 20})
    }, 1000);
})
promise3.then((user)=>{    
console.log(user)
})

//Promise4
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: 'prem karhale', password: 1234 })
        }
        else {
            reject('error occured : somthing went wrong ')
        }
    }, 1000);
})
// promise4.then().catch()  ---> it is the one way to handle the promise using .then(),.catch()
promise4.then((user) => {
    console.log(user)
    return user.username

}).then((username) => {
    console.log(username)

})
    .catch((error) => {
        console.log(error)
    })

    
//promise5 
const promise5 = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error= false
        if(!error){
            console.log('asyn task complete')
            resolve("complete")
        }
        else{
            reject("ERROR:something went wrong")
        }
    }, 1000);
})
async function HandleThePromise(){

try {
    const response=await promise5  //operates when the promise resolves 
    console.log(response)
    
} 
catch (error) {
    console.log(error)    // this operates when the promise rejects 
    
}
  
}
HandleThePromise()



//real life eg of fetch
async function getuserdata() {
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users/1')
     const data = await response.json();  //response.json is also a asyn operation and it takes time to fetch 
     console.log(data)
     console.log(data.address.geo.lng)

    }
    catch{
        console.log('error')
    }
     
    
}
getuserdata()
 
  





