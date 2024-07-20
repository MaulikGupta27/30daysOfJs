//Activity -1
let a = 10, b = 2;

// addition operator
console.log("Addition =", a + b);  //output=> 12
// subtraction operator
console.log("Subtraction =", a - b); //output=> 8
// multiplication operator
console.log("Multiplication =", a * b); //output=> 20
// division operator
console.log("Division =", a / b); //output=> 5
// remainder operator
console.log("Remainder =", a % b); //output=> 0


//Activity -2
let c = 5;

// addition assignment
c += 5;
console.log("Addition =", c); //output=> 10
// subtraction assignment
c - +5;
console.log("Subtraction =", c); //output=> 10


//Activity -3

//Using < and >
console.log("10>20 =", 10 > 20); //output=> false
console.log("10<20 =", 10 < 20); //output=> true
//Using <= and >=
console.log("10>=20 =", 10 >= 20); //output=> false
console.log("10<=20 =", 10 <= 20); //output=> true
//Using == and ===
console.log("10==20 =", 10 == 20); //output=> false
console.log("10===20 =", 10 === 20); //output=> false


//Activity -4
let x = 4;

//Using && operator
console.log("(x>3)&&(x<2) =", (x > 3) && (x < 2)); //output=> false
//Using !! operator
console.log("(x>3)||(x<2) =", (x > 3) || (x < 2)); //output=> true
//Using ! operator
console.log("!(x==4) =", !(x == 4)); //output=> false


//Activity -5

let num = -12;
let check = (num > 0) ? 'Positive' : 'Negative'; //output=> Negative
console.log(check);