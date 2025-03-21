
 function calculateCartPrice (...num1){//rest operator
    return num1
 }
 //console.log(calculateCartPrice(200,300,500));


 function calculateCartPrice (val1,val2, ...num1){//rest operator
    return num1
 }
 //console.log(calculateCartPrice(200,300,500,900));
 

  //Passing through objects
 const user = {
     username:"Hitesh",
     price:199
 }
 
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username:"sam",
    price:199
})


//passing through array

const myNewArray =[200,800,700]

 function  returnSecondValue(getArray){
    return getArray[1]
 }
 //console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([200,700,100,600]));
 