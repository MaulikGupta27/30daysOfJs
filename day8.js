//Activity -3

//Task 5: Spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
arr2.push(4, 5);

console.log(arr2);  //output: [ 1, 2, 3, 4, 5 ]

//Task 6: Rest operator
function sum(...args) {
    let sum = 0;
    for (const value of args) {
        sum += value;
    }
    return sum;
}
console.log(sum(1, 2, 3)); //output: 6


//Activity -4: Default Parameters

//Task 7
function product(a, b = 1) {
    return a * b;
}
console.log(product(5, 4));  //output: 20
console.log(product(5));  //output: 5