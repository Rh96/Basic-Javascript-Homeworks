// Exercise 3
// A 
let feet = 1;
let meters = 0.3048;
let conversion = feet * meters;
// console.log(conversion);

// B
let a = 5;
let b = 10;
let area = a * b;
// console.log(area);

// C
let pi = 3.14;
let r = 2;
let circleArea = pi * (r * r);
// console.log(circleArea);

// D
let numOfPhones = 30;
let phonePrice = 119.95; // 3598.5
let taxRate = 5 / 110; // 5%
let price = (phonePrice * numOfPhones) * (taxRate);
// console.log(price);

// Homework
let currentAge = 23;
let maxAge = 67;
let perDay = 3;
let eatTheRestOfLife = (maxAge - currentAge) * (365 * perDay);
console.log(`You will need ${eatTheRestOfLife} to last you until the ripe old age of ${maxAge}`);