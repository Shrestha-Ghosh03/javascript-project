const marvel_heros = ["THor","Ironman","Spiderman"]
const dc_heros = ["superman","flash","batman"]
//marvel_heros.push(dc_heros)//array in array
//console.log(marvel_heros);

//console.log(marvel_heros[2]);
//console.log(marvel_heros[3][2]);

//const all_heros=marvel_heros.concat(dc_heros)//returns new array
//console.log(all_heros);


const all_new_heros = [...marvel_heros,...dc_heros]//spread operator
//console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,8,[6,5]]]
const real_another_array = another_array .flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));//makes an array
console.log(Array.from({Name:"Hitesh"}))//gives empty array


let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3));//returns array from different sources
