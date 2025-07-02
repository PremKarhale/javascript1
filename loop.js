const myNewarray = ['prem', 'sakshi','papa','mammi']

for (let i = 0; i < myNewarray.length; i++) {
    const element = myNewarray[i];
    console.log(element)                            //for loop use in array

}

for (let i = 23; i <= 25; i++) {
    console.log() //space
    if(i == 24){
        return 
    }
    const element = i;
    console.log(`Table of  ${element} :`)

    console.log()//space
                                             // Table of 23 , 24  , 25 
    for (let j = 1; j <=10; j++) {
        const elem1 = j;                     // Inernal for loop run 10 times then exits 
        console.log(`${element} * ${elem1} = ${element*elem1}`)

    }

}   

let superman = ['batman','flash','superman']

// let arr =0;
// while(arr < superman.length){
//     console.log(`Value is ${superman[arr]}`)       //while loop
//     arr++
// }

let arr =0;
do{
    console.log(superman[arr])
    arr++
}while(arr < superman.length);


const numbers = [1,2,3,56,7]
for (const num of numbers) {      // For of loop 
    console.log(num)

}


const greeting ="prem karhale"
for (const greet of greeting) {
    console.log(greet)                      

}

const map = new Map()

map.set('ind','india')
map.set('USA', 'United States of America')
map.set('Fr','France')

console.log(map)    //aese bhi kar sakte hai 

for (const i of map) {
    console.log(map)     // one way of applying the loop on the map

}

for (const [key,value] of map) {
    console.log(key , ':-',value)    //Destructure of array
}

const game = {
    game1: 'COC',
    game2: 'BGMI',
    game3: 'Minecraft'
}
// console.log(Object.values(game))  // Object.values likhkar agar me kuch bhi likh du to vo array me convert ho jata hai 

for (const key in game) {

    console.log(`${key} :- ${game[key]}`)

}

const lang = ['js', 'python', 'java', 'rubi']

lang.forEach((item) => {
    console.log(item)                   // For each loop on ARRAY
})

function printme(item) {
    console.log(item)
}

lang.forEach(printme) //printme is the reference of the function printme()


lang.forEach((item, index, arr) => {
    console.log(item, index, arr)
})                                  /*
 js 0 [ 'js', 'python', 'java', 'rubi' ]
python 1 [ 'js', 'python', 'java', 'rubi' ]
java 2 [ 'js', 'python', 'java', 'rubi' ]
rubi 3 [ 'js', 'python', 'java', 'rubi' ]     
*/



const newlang = [
    {
        languagename:'java',
        languageshort:'java',
        model:{
            modelname:'vivo',
            modeltype:'anroid'   //nested object 

        }
    },
    
    {
        languagename:'javascript',   //array banaya usme object enject kiya
        languageshort:'js'
    },
    
    {
        languagename:'python',
        languageshort:'py'
    }
    
]

newlang.forEach( (item)=>{
console.log(item.model?.modeltype)      //this is the way of accessing the object from the array by foreach loop

} )



// *************************************** FILTER ***************************************************************
// 1) for each  --> do not use return            //both are used on the array 
// 2) filter ----> return use kar sakte hai  //  used to check boolian true or false 
// 3 ) Map ---->  used return ,     operation perform  karne ke liye 


const mynums = [1,2,3,4,5,6,20,45]
// let variable = mynums.filter( (num)=> num >5)   // [ 6, 20 ]
// console.log(variable)

let variable = mynums.filter( (num) =>{
    return num >3                  // when we take { } then we used retrun keyword to return the value 
} )
console.log(variable)


const newnums =[]
mynums.forEach( (item)=>{
  if(item > 3){
    newnums.push(item)
  }
})
console.log(newnums)
                                      // .Map loop on Array 
// const nums = mynums.map( (num) => {return num + 10})
// console.log(nums)  // .map loop is used on the array and also used to perform operations on the array 

const nums = mynums.map( (num) => num*10).filter((num) => num >=40) //chaining
console.log(nums)



// .Reduce 
const orders =[ 1,3,4]
//  const ordertotal = orders.reduce( ( accumulator , currentvalue)=>{
//     console.log(`accumulator :${accumulator} , currentvalue :${currentvalue}`)
//     return accumulator + currentvalue
// },0)

// console.log(ordertotal)


const total = [];

let  orderinitial =0;

 orders.forEach( (currenval) => {     //one more eg of for each loop , instead of reduce 
   total.push(orderinitial += currenval)
})
console.log(total)


// Real life eg of reduce 
//Q) add the total price of the orders in the cart 
const orderlist =[
{
    name: 'js course ',
    price : 999
},
{
    name: 'python ',
    price : 499
},
{
    name: 'java course  ',
    price : 6000
},
{
    name: 'ML course ',
    price : 10000
},
]

const ordertotal = orderlist.reduce( (accmul , item)=>{
    console.log(`${item.name} price $ ${item.price}`)
 return accmul + item.price 
},0)
console.log( `total price is $`+ ordertotal)

