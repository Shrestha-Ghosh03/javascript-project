// Immediately Invoked Function Expressions (IIFE)
//TO AVOID GLOBAL SCOPE POLLUTION(global scope variable declaration)

(function chai() {
    //named iife
    console.log(`DB Connected`);
})();//need to stop the function ;

//(definition)(execution call)

//use it as arrow func
(() => {
    console.log(`connected `);
})();

//use it as arrow func with arguments
((name) => {
    console.log(`connected ${name}`);
})('hitesh');
