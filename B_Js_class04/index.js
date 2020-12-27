// Student Exercise 1
function Pow(x, y) {
    let sum = 0;
    let i = x;
    while(i <= y){
        sum += Math.pow(i, 2);
        i++;
    }
    return sum;
}

// console.log(Pow(1,4));
// console.log(Pow(101, 150));

// Student Exercise 2
function findNumber(num, array) {
    let occurences = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] == num){
            occurences++;
        }
    }
    return `There is ${occurences} occurences of number ${num} in the array`;
}

// console.log(findNumber(5, [5,5,5,5,6]));
// console.log(findNumber(3, [1,3,7,10,3]));
// console.log(findNumber(6, [1,1,3,19,6]));

// Student Exercise 2
function calculateTime(numEntered) {
    let hours = Math.floor((numEntered / 60) / 60);
    let minutes = Math.floor((numEntered - ((hours * 60) * 60)) / 60);
    let seconds = Math.floor((numEntered - (((hours * 60) * 60) + (minutes * 60))));
    let timeDuration = `There are ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    console.log(timeDuration);
}

// calculateTime(12272);

// Homework 1
function sumMaxMin(array) {
    let max = array[0];
    let min = array[0];
    for (const val of array) {
        if(val > max){
            max = val;
        }
        if(val < min){
            min = val;
        }
    }

    return `Max: ${max}, Min: ${min}, Sum: ${max + min}`;
}

// console.log(sumMaxMin([3,5,6,8,11]));

// Homework 2
function getFullName(first, last) {
    let full = [];
    for(let i = 0; i < first.length; i++){
        full.push(i+1 + '.'+ first[i] + ' ' + last[i]);
    }
    return full;
}

console.log(getFullName(["Bob", "Jill"], ["Gregory", "Wurtz"]));