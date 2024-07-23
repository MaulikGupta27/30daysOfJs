//Activity -1

//Task 1

function check(num) {
    if (num % 2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}

let a = 4;
console.log(check(a));  //output: Even

//Task 2

function square(num) {
    return num * num;
}

let b = 8;
console.log(square(b));  //output: 64


//Activity -2

//Task 3

function maxNum(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}

let c = 27, d = 69;
console.log(maxNum(c, d));  //output: 69

//Task 4

function concatStrings(str1, str2) {
    return str1 + str2;
}

let string1 = "Maulik", string2 = "Gupta";
console.log(concatStrings("Maulik", "Gupta")); //output: MaulikGupta


//Activity -3

//Task 5

const sumDigits = (a, b) => {
    return a + b;
}

let num1 = 4, num2 = 5;
console.log(sumDigits(num1, num2));  //output: 9

/*
The parentheses can only be omitted if the function has a single simple parameter.
const sumDigits = (a, b) => a + b;
*/

//Task 6

const strCheck = (string, char) => {
    if (string.indexOf(char) != -1) {
        return true;
    }
    else {
        return false;
    }
}

console.log(strCheck("Maulik", 'q'));  //output: false


//Activity -4

//Task 7

function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 3)); // output: 15
console.log(multiply(7));    // output: 7 (since b defaults to 1)

//Task 8

function greeting(name, age = 19) {
    return `Hello ${name}. Age = ${age}`;
}

let Name = "Maulik", age;
console.log(greeting(Name, age)); //output: Hello Maulik. Age = 19 (since age defaults to 19)
age = 20;
console.log(greeting(Name, age)); //output: Hello Maulik. Age = 20


//Activity -5

//Task 9

function repeat(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}

function sayHello() {
    console.log('Hello');
}

repeat(sayHello, 3); // output :- Hello Hello Hello

//Task 10

function add(func1, func2) {
    return func2(func1(val1, val2));
}

function func1(val1, val2) {
    return val1 + val2;
}

function func2(val) {
    return val * 2;
}

let val1 = 7, val2 = 8;
console.log(add(func1, func2)); // output:- 30