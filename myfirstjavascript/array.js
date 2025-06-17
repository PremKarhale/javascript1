const array = [1,2,3,4,5,6]

const myarray = new Array(1,5,6,7,8)

// console.log(array)
// console.log(myarray[3])
array.push(7);
array.pop()

array.unshift(9); // adds 9 before  in the array 
array.shift(); // pop out from the starting of the array 
console.log(array)

console.log(myarray)
console.log(myarray.join());  //converts the array into the string 
console.log(typeof myarray.join()); //string 



//*************************** SLICE OR SPLICE ***************************** */

console.log(array);  // [ 1, 2, 3, 4, 5, 6 ]
console.log(array.slice(1,4)); // [ 2, 3, 4 ]       //1 st slice   // in slice last range cannot included 

console.log(array); // [ 1, 2, 3, 4, 5, 6 ]



console.log(array.splice(1,4)) // [ 2, 3, 4, 5 ]      //in splice original array also changes 
console.log(array); // [ 1, 6 ]                        // Splice manipulates the original array 




//********************************* CONCAT & SPREAD OPERATOR ************************************************ */

const heros = ['ironman', 'spiderman','wanda','hulk'];
const dc_heroes =['superman','batman','flash'];


heros.push(dc_heroes);
console.log(heros)
console.log(heros[4][1]) //batman

const together = heros.concat(dc_heroes)
console.log(together)  

/*
[
  'ironman',  
  'spiderman',
  'wanda',    
  'hulk',     
  'superman', 
  'batman',   
  'flash'     
]
*/
const newheroes = [...heros,...dc_heroes];
console.log(newheroes)    //spread operator


const anotherarray = [1,2,3,4,[5,3,4],6,7,2,[1,6,7]];
const anothernewarray = anotherarray.flat(Infinity);             //flat operator 
console.log(anothernewarray);   

console.log(Array.isArray('prem'));  //false
console.log(Array.from('prem'));  //[ 'p', 'r', 'e', 'm' ]
console.log(Array.from({name:'prem'}))  //
console.log(Array.from({name:'prem'}))  // i got a empty array  intresting case  !! we have to specify 



const score1 =45
const score2 = 56;
const score3 = 26 ;

console.log(Array.of(score1,score2,score3)); //[ 45, 56, 26 ]














