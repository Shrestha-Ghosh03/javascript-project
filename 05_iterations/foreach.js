const coding = ["js","ruby","java","python"]

//  TYPE 1
//call back function has no name
/*coding.forEach( function (item) { //foreach needs callback function
    console.log(item);
} )*/

// TYPE 2
/*coding.forEach( (item) => {
    console.log(item);
})*/


// TYPE 3
/*function printMe(item){
    console.log(item);
    
}
coding.forEach(printMe)//give te reference
*/

// PARAMETERS PASSED
/**coding.forEach((item,index,arr)=> {
    console.log(item,index,arr);
    
})
    
*/

//array -object iteration using for each
const myCoding = [
    {
        languageName : 'javascript',
        filename: 'js'
    },
    {
        languageName : 'python',
        filename: 'py'
    },
    {
        languageName : 'c++',
        filename: 'cpp'
    }

]

myCoding.forEach((item)=>{
    console.log(item.languageName.length);
    
})