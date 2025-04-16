//for of 

//["","",""] array
// objects inb array [{},{},{}]

/*const arr = [1,2,3,4,5]
for (const num of arr){
console.log(num);

}*/

/*const greeting = "hello world"
for (const greet of greeting) {
    console.log(`each char ${greet});
    
}*/

//maps => store unique key values
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
/*const map = new Map()
map.set('IN',"india")
map.set('USA',"United State of America")
map.set('IN',"india")
console.log(map)*/

/*const map = new Map()
map.set('IN',"india")
map.set('USA',"United State of America")
for (const key of map) {
    console.log(key)
}*/


/*const map = new Map()
map.set('IN',"india")
map.set('USA',"United State of America")
for (const [key, value] of map) {
    console.log(key,':-', value)
}*/


const myObject={
    'game1': 'NFS',
    'game2':'spiderman'
}
/*for (const key of myObject) {
    console.log(key)//not iterable
}*/

//forof loops don't work with objects