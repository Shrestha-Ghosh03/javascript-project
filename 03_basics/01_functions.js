function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("E");
    console.log("S");
    console.log("T");
    console.log("H");
    console.log("A");
}
//sayMyName()
//sayMyName//for reference

/*function addTwoNum(num1,num2) {//num1,num2 parameters
    console.log(num1 + num2);
    
}
const result=addTwoNum(3,5)//arguments 
console.log(result);//undefined
*/

function addTwoNum(num1,num2) {
   // let result=num1+num2;
    //return result;
    return num1+num2
}
const result=addTwoNum(3,5)
//console.log(result);

function loginUserMessage(username ="Sam"){
    if(username=== undefined){//if(!username)
        console.log("Please enter username");
        return
    }
    return `${username} just logged in `
}
console.log(loginUserMessage("Shrestha"))
//console.log(loginUserMessage())//undefined