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

const lang = ['js', 'python','java','rubi']
lang.forEach((item)=>{
    console.log(item)                   // For each loop on ARRAY
})                         


