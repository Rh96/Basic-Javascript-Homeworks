// Task 0
function createArray(num) {
    let newArr = [];
    let i = 0;
    while(i < num){
        newArr.push(i + 1);
        i++;
    }
    return newArr;
}

// console.log(createArray(5));
// console.log(createArray(10));
// console.log(createArray(-5));

// Task 1
function getFirstValue(array) {
    let result = 0;
    // let i = 0;
    // while(i < array.length){
    //     console.log(array);
    //     result = array.shift();
    //     i++;
    // }
    result = array.shift();
    return result;
}

// console.log(getFirstValue([1,2,3]));

// Task 2
function reverse(array) {
    let reversedArr = [];
    for(let i = 0; array.length; i++){
        reversedArr.push(array.pop());
    }

    return reversedArr;
}

// console.log(reverse([1,2,3,4]));
// console.log(reverse([9, 9, 2, 3, 4]));
// console.log(reverse([]));

// Task 3
function search(array, num) {
    let result = 0;
    for(let i = 0; i < array.length; i++){
       result = array.indexOf(num);
    }
    return result;
}

// console.log(search([1,2,3,4], 3));
// console.log(search([2, 4, 6, 8, 10], 8));
// console.log(search([1, 3, 5, 7, 9], 11));

// Task 4
function check(array, num) {
    for(let item of array) {
        if(item == num){
            return true;
        }
    }
    return false;
}

// console.log(check([1, 2, 3, 4, 5], 3)); // true
// console.log(check([1,1,2,1,1], 3)); // false
// console.log(check([5,5,5,6], 5)); // true
// console.log(check([], 5)); // false

// Task 5
// + * - = -
// - * - = +
let negate = (array) => {
    let result = [];
    for(let i = 0; i < array.length; i++){
        result.push(array[i] * -1);
    }
    return result;
}

// console.log(negate([1, 2, 3, 4]));
// console.log(negate([-1, 2, -3, 4]));
// console.log(negate([]));

// Task 6
// let diffMaxMin = (array) => {
//     let max = 0;
//     let min = 0;
//     for(let i = 0; i < array.length; i++){
//         if(array[i] == Infinity){
//             max = array[i];
//         }
//         if(array[i] == -Infinity){
//             min = array[i];
//         }
//     }
//     return `Max: ${max}, Min: ${min}`;
// }

// console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));

// Task 7
let MultiplyByLength = (array) => {
    let result = [];
    for(let i = 0; i < array.length; i++){
        result.push(array[i] * array.length);
    }
    return result;
}

// console.log(MultiplyByLength([2, 3, 1, 0]));
// console.log(MultiplyByLength([4,1,1]));
// console.log(MultiplyByLength([1, 0, 3, 3, 7, 2, 1]));

// Task 8
