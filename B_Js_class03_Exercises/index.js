// Exercise 1
function convertToSec(min) {
    let sec = min * 60;
    return sec;
}
// console.log(convertToSec(5));
// console.log(convertToSec(3));
// console.log(convertToSec(2));

// Exercise 2
function returnNextNum(num) {
    return num + 1;
}

// console.log(returnNextNum(0));
// console.log(returnNextNum(9));
// console.log(returnNextNum(-3));

// Exercise 3
function convertHoursToSec(hr) {
    let min = hr * 60;
    let sec = convertToSec(min);
    return sec;
}

// console.log(convertHoursToSec(2));
// console.log(convertHoursToSec(10));
// console.log(convertHoursToSec(24));

// Exercise 4
function remainder(a, b) {
    let result = (a % b);
    return result;
}

// console.log(remainder(1,3));
// console.log(remainder(3,4));
// console.log(remainder(-9, 45));
// console.log(remainder(5, 5));

// Exercise 5
function animals(chickens, cows, pigs) {
    let result = (chickens * 2) + (cows * 4) + (pigs * 4);
    return result;
}

// console.log(animals(2, 3, 5));
// console.log(animals(1, 2, 3));
// console.log(animals(5, 2, 8));

// Exercise 6
function compare(str1, str2) {
    if(str1.length != str2.length){
        return false;
    }
    return true;
}

// console.log(compare("AB", "CD"));
// console.log(compare("ABC", "DE"));
// console.log(compare("hello", "sedc"));

// Exercise 7
function isPlural(word) {
    if(!word.endsWith('s')){
        return false;
    }
    return true;
}

// console.log(isPlural("changes"));
// console.log(isPlural("change"));
// console.log(isPlural("dudes"));
// console.log(isPlural("magic"));

// Exercise 8
function match(word1, word2) {
    if(word1.toLowerCase() != word2.toLowerCase()){
        return false;
    }
    return true;
}

// console.log(match("hello", "hELLo"));
// console.log(match("motive", "emotive"));
// console.log(match("venom", "VENOM"));
// console.log(match("mask", "mAskinG"));

// Exercise 9
function monthName(num) {
    switch (num) {
        case 1:
            return "January";
            break;
        case 2:
            return "February";
            break;
        case 3:
            return "March";
            break;
        case 4:
            return "April";
            break;
        case 5:
            return "May";
            break;
        case 6:
            return "June";
            break;
        case 7:
            return "July";
            break;
        case 8:
            return "August";
            break;
        case 9:
            return "September";
            break;
        case 10:
            return "October";
            break;
        case 11:
            return "November";
            break;
        case 12:
            return "December";
            break;
    
        default:
            console.log("Month with that number does not exist");
            break;
    }
}

// console.log(monthName(3));
// console.log(monthName(12));
// console.log(monthName(6));

// Exercise 10
function isTruthy(type) {
    if(!isNaN(type)){
        return 0;
    }
    return 1;
}
// console.log(isTruthy(0));
// console.log(isTruthy(false));
// console.log(isTruthy(""));
// console.log(isTruthy("false"));