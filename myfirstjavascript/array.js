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




