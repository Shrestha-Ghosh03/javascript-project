const name= "Hitesh";
const repoCount = 50
console.log(name + repoCount + "Values");

//String interpolation
console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

//string declaration using new keyword
const gameName =new String("History") //stores as a key value pairs
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);


//String methods
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('r'));

const newString =gameName.substring(0,4);
console.log(newString);

const anotherSlice = gameName.slice(-5,-3);//slice(indexStart) , slice(indexStart, indexEnd)
console.log(anotherSlice);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice


const newString1 = "  Hitesh   "
console.log(newString1);
console.log(newString1.trim());

const url= "https://hitesh.com/hitesh%20chowdhary"
console.log(url.replace('%20','-'));

console.log(url.includes('am'));

const newString2 = "hitesh-hc-gc"
console.log(newString2.split('-'));
/*split(separator)
split(separator, limit)*/






