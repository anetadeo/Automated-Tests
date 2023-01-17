function sum(a, b) {
    return a+b
}
console.log(sum(10, 10)); //20;

function product(a, b) {
    return a*b
}
console.log(product(10, 9)); 

const bigProduct = product(1000, 1000);
console.log(bigProduct);

setTimeout (function () {
console.log('Hey, you are doing great!');
}, 1000);


setTimeout ( () => 
    console.log('Hey, you are doing great!'), 1000);


    