// for loop

//syntax 
/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/

/*for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
    
}*/

//console.log(element); //donot work outside the scope

// if-else in for loop
/*for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
       // console.log("5 is best number");
        
    }
    console.log(element);
}
*/

//for loop in for loop
/*for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value : ${i}`);
    for (let j = 0; j <= 10; j++) {
       // const element = array[j];
       console.log(i + '*' + j + '=' + i*j)
        console.log(`Outer loop value : ${i} and inner loop : ${j}`);
    }
   // const element = array[i];
}*/


//array in forloop
/*let myArray = ["flash", "batman", "superman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)
}*/

// break and continue

/*for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log(`detected 5`);
        break;
    }
    console.log(`value of i is ${i}`)
    
}*/


for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i is ${i}`)
    
}
