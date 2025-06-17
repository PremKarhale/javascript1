const score= 400
const newscore = new Number(score)
console.log(newscore)

console.log(newscore.toString().length)
console.log(newscore.toFixed(1))
const otherno = 345.9277
console.log(otherno.toPrecision(5))//345.93

const hundereds = 1000000000;
console.log(hundereds.toLocaleString())


// ******************************************************* MATHS**************************************************************

console.log(Math);
console.log(Math.abs(-4))  //4
console.log(Math.round(4.1)) //4               //operations on math
console.log(Math.ceil(4.5)) //5
console.log(Math.floor(4.5))//4

console.log(Math.random()) // no is between 0 se 1 
console.log((Math.random()*10) +1);
console.log(Math.floor((Math.random()*10) +1));

const max = 20;
const min = 10;

console.log(Math.ceil(Math.random()*(max - min +1) + min))

