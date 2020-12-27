// Exercise 1
// function Sum(a, b) {
//     let result = a + b;
//     console.log("Sum: " + result)
//     return result;
// }

// function Subtract(a, b) {
//     let result = a - b;
//     console.log("Subtract: " + result)
//     return result;
// }

// function Multiply(a, b) {
//     let result = a * b;
//     console.log("Multiply: " + result)
//     return result;
// }

// function Divide(a, b) {
//     if(b === 0){
//         console.log("Cannot divide by zero!")
//     }
//     else {
//         let result = a / b;
//         console.log("Divide: " + result)
//         return result;
//     }
// }

// Sum(10, 5);
// Subtract(28, 19);
// Multiply(5, 12);
// Divide(10, 2);

// Student Exercise 1
function calculateSupply(age, amountPerDay) {
    let maxAge = 67;
    let total = (maxAge - age) * (365 * amountPerDay);
    let message = `You will need ${Math.round(total)} to last you until the ripe old age of ${maxAge}`;
    console.log(message);
}

// calculateSupply(23, 3.555);
// calculateSupply(19, 13.231233);
// calculateSupply(12, 5.1231231312);

// Student Exercise 2
function calculateAge(birthYear) {
    let currentYear = new Date();
    let total = currentYear.getFullYear() - birthYear;
    let message = `You are ${total} years old`;
    console.log(message);
}

// calculateAge(1996);
// calculateAge(1999);
// calculateAge(1969);

// Student Exercise 3
function farmInventory(cows, chickens) {
    let result = cows / 100;
    let result1 = chickens / 100;
    let msg1 = `${result} Cows`;
    let msg2 = `${result1} Chikens`;
    let message = msg1.replace('.', "") + "\n" + msg2.replace('.', "");
    console.log(message);
}

// farmInventory(7, 11);

// Homework A
function multiply(a, b) {
    return a * b;
}
// console.log(multiply(5,5));
// console.log(multiply(12,5));
// console.log(multiply(3,5));

// Homework B
function divide(a, b) {
    if(b === 0){
        console.log("Cannot divide by zero!")
    }
    else {
        return a / b;
    }
}
// console.log(divide(10, 1));
// console.log(divide(10, 2));
// console.log(divide(10, 5));

// Homework C
function celsius(f) {
    return (f - 32) * (5 / 9);
}

function fahrenheit(c) {
    return c * 9/5 + 32
}

// console.log(celsius(140) + " C");
// console.log(celsius(98) + " C");
// console.log(fahrenheit(37) + " F");
// console.log(fahrenheit(100) + " F");

// Homework D
function checkType(type) {
    return typeof(type);
}

console.log(checkType(null));
console.log(checkType(true));
console.log(checkType(5));
console.log(checkType(""));
console.log(checkType());