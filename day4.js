//Activity -1

//Task 1

for (let i = 1; i < 11; i++) {
    console.log(i);
}                       //output: 1 2 3 4 5 6 7 8 9 10

//Task 2

for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}                       //output: 5 10 15 20 25 30 35 40 45 50


//Activity -2

//Task 3

let x = 1, sum = 0;
while (x < 11) {
    sum += x;
    x++;
}
console.log(sum);       //output: 55

//Task 4
let y = 10;
while (y > 0) {
    console.log(y);
    y--;
}                       //output: 10 9 8 7 6 5 4 3 2 1


//Activity -3

//Task 5

let z = 1;
do {
    console.log(z);
    z++;
} while (z <= 5);       //output: 1 2 3 4 5

//Task 6

let num = 7, fact = 1;
do {
    fact *= num;
    num--;
} while (num > 0);
console.log(fact);      //output: 5040


//Activity -4

//Task 7

for (let i = 0; i < 5; i++) {
    let pattern = '';
    for (let j = 0; j <= i; j++) {
        pattern = pattern + "*" + " ";
    }
    console.log(pattern);
}
/*output:

*
* *
* * *
* * * *
* * * * *

*/


//Activity -5

//Task 8

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}                       //output: 1 2 3 4 6 7 8 9 10

//Task 9

for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i);
}                       //output: 1 2 3 4 5 6