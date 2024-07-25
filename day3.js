//Activity -1

//Task 1
let a = 5;
if (a > 0) {
    console.log("Positive");    //output: Positive
}
else if (a < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}

//Task 2
let age = 37;
if (age >= 18) {
    console.log("Eligible to vote");    //output: Eligible to vote 
}
else {
    console.log("Not eligible to vote");
}


//Activity -2

//Task 3
let num1 = 10, num2 = 15, num3 = 20;    //output: 20
if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1);
    }
    else {
        console.log(num3);
    }
}
else {
    if (num2 > num3) {
        console.log(num2);
    }
    else {
        console.log(num3);
    }
}


//Activity -3

//Task 4
let day = 2;    //output:TUESDAY
switch (day) {
    case (1):
        console.log("MONDAY");
        break;
    case (2):
        console.log("TUESDAY");
        break;
    case (3):
        console.log("WEDNESDAY");
        break;
    case (4):
        console.log("THURSDAY");
        break;
    case (5):
        console.log("FRIDAY");
        break;
    case (6):
        console.log("SATURDAY");
        break;
    case (7):
        console.log("SUNDAY");
        break;
}

//Task 5
let score = 7;  //output: C
switch (score) {
    case (10):
    case (9):
        console.log("A");
        break;
    case (8):
        console.log("B");
        break;
    case (7):
        console.log("C");
        break;
    case (6):
        console.log("D");
        break;
    default:
        console.log("F");
}


//Activity -4

//Task 6
let num = 27;   //output: Odd
let check = (num % 2 == 0) ? console.log("Even") : console.log("Odd");


//Activity -5

//Task 7
let year = 1900;    //output: Not a leap year
if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
    console.log("Leap Year");
}
else{
    console.log("Not a leap year");
}