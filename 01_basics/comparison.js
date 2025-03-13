//console.log(2>1);
//console.log(2>=1);
 
console.log("2">1);

console.log(null > 0);//false
console.log(null == 0);// false
console.log(null >= 0);//true

/* this reason is that an equality check == and comparisons > < >= <= works diffrently
comparions convert null to a number , treating it as 0
that's why (3)null>= 0 is true and (1) null>0 is false
*/

console.log(undefined == 0);//false
console.log(undefined >= 0);//false

//===  checkes datatype and value

console.log( "2" === 2);



