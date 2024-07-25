//for-of and for-in loops can also be used to print array: refer harry #19
//Activity -1

//Task 1
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1); //output: [ 1, 2, 3, 4, 5 ]

//Task 2
let arr2 = [5, 10, 15, 20, 25, 30];
let firstElement = arr2[0];
let lastElement = arr2[arr2.length - 1];
console.log(firstElement + " and " + lastElement); //output: 5 and 30


//Activity -2

//Task 3
let arr3 = [5, 4, 3, 2, 1];
arr3.push(58);
console.log(arr3); //output: [ 5, 4, 3, 2, 1, 58 ]

//Task 4
let arr4 = ["mango", "apple", "banana", "carrot"];
arr4.pop();
console.log(arr4); //output: [ 'mango', 'apple', 'banana' ]

//Task 5
let arr5 = ["orange", "potato", "cabbage", "ginger", "peas"];
arr5.shift();
console.log(arr5); //output: [ 'potato', 'cabbage', 'ginger', 'peas' ]

//Task 6
let arr6 = [6, 9, 12, 15, 18];
arr6.unshift(3);
console.log(arr6); //output: [ 3, 6, 9, 12, 15, 18 ]


//Activity -3

//Task 7: map() to create a new array where each number is doubled
let first = [2, 4, 6, 8, 10];
let second = first.map((doubleVal) => {     //newArray is formed in map()
    return doubleVal * 2;
})
console.log(second); //output: [ 4, 8, 12, 16, 20 ]

//Task 8: filter() to create a new array with only even numbers
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenArr = numArr.filter((evenNum) => {     //newArray is formed in filter()
    return evenNum % 2 == 0;
})
console.log(evenArr); //output: [ 2, 4, 6, 8 ]

//Task 9: reduce() to calculate sum of all numbers in array
let arrayNew = [3, 1, 6, 8, 4, 2];
let arraySum = arrayNew.reduce((a, b) => {     //reduce() reduces the array to a single value
    return a + b;
})
console.log(arraySum); //output: 24


//Activity -4

//Task 10
let products = ["laptop", "computer", "phone"];
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}
// output:
// laptop
// computer
// phone

//Task 11
let colors = ["red", "blue", "green"];
colors.forEach((value) => {
    return console.log(value);
})
// output:
// red
// blue
// green


//Activity -5
//Task 12
let nums = [[1, 2, 3, 4], [4, 3, 2, 1]];
console.log(nums); //output: [ [ 1, 2, 3, 4 ], [ 4, 3, 2, 1 ] ]

//Task 13
let country = [
    ["Iran", "Iraq", "Pak"],
    ["China", "India", "Bhutan"] 
];
console.log(country[1][1]); //output: India