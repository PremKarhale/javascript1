
//*********************************** OBJECT #1******************************************************

const mysym = Symbol('key1')

const user ={
    name:'prem',
    age:30,
    emailid : 'prem123@gmail.com',
    isloggedIN : false,
    [mysym] : 'mykey1',
    lastLoginDays  : ['monday','friday ']

}

console.log(user.name)
console.log(user['name'])// Here name is a string so can be accessed in this way
console.log(user['emailid']) //prem123@gmail.com
console.log(user[mysym])
console.log(typeof [mysym]) // object



console.log(user.emailid = 'prem345@gmail.com');

// Object.freeze(user); // now i freeze the object and we cannot change its value now
console.log(user)

user.greeting = function(){
    return ' hello js user '
}
console.log(user.greeting())

user.greeting2 = function(){
    return `hello  new js user ${this.name} of age ${this.age}`  // this statement
}
console.log(user.greeting2());


//********************************* OBJECT #2 ******************************************************* */


// const tinderuser = new Object(); // it is singleton object 
const tinderuser1 = {} // it is not singleton object 

tinderuser1.id = 12;
tinderuser1.name = 'prem';
tinderuser1.isloggedIN = false

console.log(tinderuser1)

// Nested object 
const tinderuser2 = {
    emailid: 'prem123@gmail.com',
    fullname: {
        userName: {
            firstName: 'prem',
            lastName: 'karhale'
        }
    },
    age: 34
}
console.log(tinderuser2.fullname.userName.firstName) // this is the way of accessing the items in the nested object 

//Interpolation of objects 
const obj1 = { 1: 'a', 2: 'b', 3: 'c' }
const obj2 = { 4: 'a', 5: 'b', 6: 'c' }
// const obj3 = Object.assign({} ,obj1,obj2)    // one way  "OBJECT ASSIGN '

const obj3 = { ...obj1, ...obj2 }  /// "SPREAD OPERATOR "  # KING OF ALL OPERATOR
console.log(obj3)



//*** Used to convert object to the array -->'OBJECT.KEYS' */
console.log(tinderuser1);
console.log(Object.keys(tinderuser1))  //[ 'id', 'name', 'isloggedIN' ]
console.log(Object.values(tinderuser1)) //[ 12, 'prem', false ]
