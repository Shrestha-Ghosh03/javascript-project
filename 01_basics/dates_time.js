//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let mycreatedDate = new Date(2023,0,23)//jan starts from 0 customised date
console.log(mycreatedDate.toDateString());

//let mycreatedDate2= new Date(2023,0,23,5,3)
let mycreatedDate2= new Date("2023-01-03")//here months starts from 01 syntax yy-mm-dd
console.log(mycreatedDate2.toLocaleString());

let mycreatedDate3= new Date("02-14-2003")//new date syntax mm-dd-yy
console.log(mycreatedDate3.toLocaleString());


let myTimeStamp =Date.now()
//console.log(myTimeStamp);//output in miliseconds
//console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));//output in seconds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));



