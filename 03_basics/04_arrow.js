const user = {
    username:"hitesh",
    price:999,

    welcomeMessage: function (){
        console.log(`${this.username}, welcome to website`);//accessing current context
        console.log(this);//shows current context
        
    }

}
//user.welcomeMessage();
//user.username="sam"//username changed== current context changed
//user.welcomeMessage();

//console.log(this);//gives empty object{}
// window is the global object in browser


/*function chai(){
    let username="hitesh"
    //console.log(this);
    console.log(this.username);//undefined
}
chai()*/
// this keyword is only used in object


/*const chai=function (){
    let username="hitesh"
    console.log(this.username);//undefined
}
*/

//using arrow function 
/*const chai= () => {
    let username="hitesh"
    console.log(this.username);//undefined=> not worked in arrow function
    //console.log(this);//{}
}
chai()*/

//basic arrow function
/*const addTwo=(num1,num2) => {
    return num1+num2
}
console.log(addTwo(5,6));*/

//impicit return
//const addTwo=(num1,num2) => num1+num2
//const addTwo=(num1,num2) => (num1+num2)
    
//console.log(addTwo(5,6));

//explicit return 

// object return 
const addTwo=(num1,num2) => ({username: "hitesh"})
console.log(addTwo(5,6));

//loops
const myArray = [1,5,6,8,7]

//myArray.forEach(() => ())


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this