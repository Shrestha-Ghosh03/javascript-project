// array declaration
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr =[0,2,3,4,5]//type 1
const myArr2 = new Array(1,2,3,4)//type 2
console.log(myArr2);
console.log(myArr);
 
//Array Methods

myArr.push(8)
myArr.pop()


myArr.unshift(9)// adding infirst
myArr.shift()//undo unshift
console.log(myArr);

console.log(myArr.includes(5));
console.log(myArr.indexOf(7));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);//joins makes array into string
console.log(typeof newArr);

//slice , splice
console.log("A",myArr);

const myn1 =myArr.slice(1,3)
console.log(myn1);

console.log("B",myArr);

const myn2 =myArr.splice(1,3)
console.log(myn2);

console.log("C",myArr);
console.log(myn2);

/*slice -> use take a portion of an array  but the array will be same 
but in splice -> it gives the output including the last range and also the main array is changes according to the splice range */

