const score = 400;
console.log(score);
console.log(typeof score);//number

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num2 = 23.55641
console.log(num2.toPrecision(4));

const hundreds = 100000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));//gives indian syntax

Number.MAX_VALUE
Number.MIN_VALUE

//+++++++++++++++++++++++ Maths +++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));//absolute value
console.log(Math.round(4.85));//5 gives nearest integer
console.log(Math.ceil(4.2));//gives the nearest highest integer
console.log(Math.floor(4.63));//gives the nearest lowest integer
console.log(Math.min(5,3,8));
console.log(Math.max(8,6,1));

console.log(Math.random());// give the values  in range 0-1
console.log((Math.random()*10)+1); //gives min 1
console.log(Math.floor(Math.random()*10)+1); 

//Formula
const min = 10 
const max = 20
console.log(Math.floor(Math.random() * (max-min + 1)) + min); // gives min = 10  and max 20 range[10-20]
// max - min -> gives the range
// + 1 -> use to avoid 0 as output
// +min -> use to get the output  from 10 
