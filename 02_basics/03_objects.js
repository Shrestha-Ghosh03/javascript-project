//Singleton(Constructor),literal object declaration, by constructor object declaration
//Object.create

//Object literals(keys,values)

//using symbol datatype in object keys
const mySym = Symbol("key1")


const jsUser = {
    name:"Hitesh",
    "full name":"Shrestha Ghosh",
    age:18,
   // mySym:"mykey1" datatype: string not symbol
   [mySym]:"mykey1",//write syntax
    location:"Jaipur",
    email:"Hitesh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

//Accesing objects
console.log(jsUser.email);//1st way
console.log(jsUser["email"]);//2nd way

console.log(jsUser["full name"]);//doesn't access using dot

console.log(jsUser[mySym]);
console.log(typeof (jsUser[mySym]));


//changing values
jsUser.email="hitesh@chatgpt.com"

//freeze objects (changes will be not done)
//Object.freeze(jsUser)
jsUser.email="hitesh@uber.com"
console.log(jsUser);

//function in object
jsUser.greeting=function(){
    console.log("hello");
    
}
console.log(jsUser.greeting);//undefined
console.log(jsUser.greeting());

//object reference using ``
jsUser.greeting2=function(){
    console.log(`hello, ${this.name}`);
    
}
console.log(jsUser.greeting2());
//generally used dot exceptional cases uses [] to access objects

