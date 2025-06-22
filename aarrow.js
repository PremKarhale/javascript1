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


const chai = function(){
    let ussername = {
        name:'prem',
        age:20
        
    }
    
    
}
chai()


const chai2 = () =>{
    console.log(this) //{}

}