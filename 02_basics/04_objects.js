// object using constructor (Singleton)

//const tinderUser = new Object()// singleton object 
const tinderUser={}// non- singleton objects

tinderUser.id="12566re"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

//object in object

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Shrestha",
            lastname:"Ghosh"
        }
    }
}
//console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);



/*optional chainning (if fullname doesn't exist)syntax will be different
console.log(regularUser.fullname?.userfullname.firstname);*/


//merging two objects
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

//const obj3={obj1,obj2}//not a right way
//const obj3= Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}//spread operator
console.log(obj3);

//resources :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// array of objects from databases
const User=[
    {
        id:1,
        email:"@gmail.com"
    },
    {
        name:"shrestha"
    }
]
User[1].email//accesing 1st value

console.log(tinderUser);
console.log(Object.keys(tinderUser));//gives all keys
console.log(Object.values(tinderUser));// gives all values
console.log(Object.entries(tinderUser));//shows how many entries are done


console.log(tinderUser.hasOwnProperty('isLoggedin'));//checks if  it is present or not
//objects methodes are shown in console


//object de-structure

const course = {
    courseName:"js in hindi",
    price:"999",
    courseInstrctor:"Hitesh"
}

//course.courseInstrctor

/*const {courseInstrctor} = course
console.log(courseInstrctor);*/

const {courseInstrctor: instructor} = course // de-structuring object and giving new name
console.log(instructor);


// REACT
/*
const  navbar = ({company}) => {

}

navbar(company = 'hitesh')
*/

 //api fetch