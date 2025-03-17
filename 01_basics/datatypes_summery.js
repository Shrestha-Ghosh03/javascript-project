// Primitive

 //  7 types : String, NUmber, Boolean, null, Undefined, Symbol,Bigint

// reference type or non-primitive

// Array, Objects, Functions


//dynamically  typed language

const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2); // false

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack memory(Primitive) , Heap memory (Non-primitive)
//Stack memory copy of variable , heap memory reference of variable


//stack
let myYoutube = "Shresatga"

let anothername = myYoutube
anothername = "Lenovo"

console.log(anothername)
console.log(myYoutube)

//Heap
let user = {
    email:"user.email.com",
    upi:"shrbh@ybl"
}

let user2 = user
user2.email = "hitesh@google.com"

console.log(user.email)
console.log(user2.email);

