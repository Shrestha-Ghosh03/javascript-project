/*const useremail="h@gmail.com"

if (useremail){
    console.log("user email");
}else{
    console.log("don't have useremail");
}*/

/*const useremail=[]

if (useremail){//true
    console.log("user email");
}else{
    console.log("don't have useremail");
}*/

/*const useremail=""

if (useremail){ //false
    console.log("user email");
}else{
    console.log("don't have useremail");
}*/

/* RULES 

//falsy values 

false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

"0", 'false', " ", [], {}, function(){}
*/

/*const useremail=[]
if(useremail.length===0){
    console.log("Array is Empty");
}*/

/*//checks object empty
const emptyObj ={}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}*/

/* false== 0 //true
false == "" //true
0==""//true*/


/*//Nullish Coalescing Operatorr (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

//console.log(val1);//5
//console.log(val1);//10
//console.log(val1);//5
console.log(val1);//10*/

//Terniary Operator 

//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("true") :console.log("false");


