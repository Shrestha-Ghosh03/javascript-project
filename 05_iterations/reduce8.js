const myNums = [1,2,3]
/*const mytotal=myNums.reduce(function(acc,currval){
    console.log(`accumulator: ${acc} and current value: ${currval}`);
    return acc+ currval
},0)
console.log(mytotal);*/


const mytotal = myNums.reduce(( acc, currval)=> acc+currval,0)//here 0 is initial value
console.log(mytotal);


// reduce used in shopping carts
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);