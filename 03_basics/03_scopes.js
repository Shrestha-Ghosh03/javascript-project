let a = 100
//const b = 20
//var c =300
var c =30//global scope

//{}-> scope
if (true){
    let a = 10//block scope
    const b = 20//block scope
    console.log("inner:",a);
    
}


console.log(a);//300
//console.log(b);
//console.log(c);//30

// core scope in console is different from node environment scope

function one(){
    const username = "hitesh"
    
    function two() {
        const website="Youtube"
        console.log(username);
        console.log(website);
    }
    //console.log(website);//error not defined
    two();
}
one();

if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website="youtube"
        console.log(username + website);
    }
    //console.log(website);// not defined error
    console.log(username);
}
//console.log(username);//not defined error

// +++++++++++++++++++ interesting ++++++++++++++++++++++++++

function addone(num) {
    return num+1
}
addone(5);// not printed yet

//function declared in variable
const addtwo= function(num){
    return num+2
}
addtwo(5)