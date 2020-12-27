// Student Exercise
// let btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//     alert('Hello Rade');
// });

// Student Exercise 2
// let btn = document.getElementById('btn');
// let name = document.getElementById('name');
// let body = document.querySelector('body');
// btn.addEventListener('click', () => {
//     let crtHd1 = document.createElement('h1');
//     crtHd1.innerHTML = `Hello ${name.value}`;
//     body.appendChild(crtHd1);
// });

// Student Exercise 3
// let body = document.querySelector('body');
// let name = document.getElementById('name');
// let phoneNumber = document.getElementById('phone');
// let btn = document.getElementById('btn');

// let phoneBook = () => {
//     let crtOl = document.createElement('ol');
//     let result = '';
//         btn.addEventListener('click', () => {
//             result += 
//             `<li>Name: ${name.value} || Phone number: ${phoneNumber.value}</li>`;
//             crtOl.innerHTML = result;
//             if(name.value.length == 0 || phoneNumber.value == 0){
//                 console.log("Enter your name and phone number sir!")
//             }
//             else {
//                 body.appendChild(crtOl);
//             }
//         })
// }
// phoneBook();

// Homework 1
// let body = document.querySelector('body');
// let who = document.getElementById('who');
// let when = document.getElementById('when');
// let where = document.getElementById('where');
// let btn = document.getElementById('btn');

// let storyTeller = () => {
//     let crtSpan = document.createElement('span');
//     let result = '';
//     btn.addEventListener('click', () => {
//         result += `There was a hero named ${who.value}.\nHe lived in ${where.value} in the times of ${when.value}.\nIt was a great hero indeed.`;
//         crtSpan.innerHTML = result;
//         if(who.value.length == 0 || when.value.length == 0 || where.value.length == 0){
//             console.log("Fill the data to generate story!")
//         }
//         else {
//             body.appendChild(crtSpan);
//         }
//     })
// }
// storyTeller();

// Homework 2
let body = document.querySelector('body');
let row = document.getElementById('row');
let column = document.getElementById('column');
let btn = document.getElementById('btn');

let generateTable = () => {
    let crtTable = document.createElement('table');
    btn.addEventListener('click', () => {
        for(let i = 0; i < row.value; i++){
            let crtTr = document.createElement('tr');

        for(let y = 0; y < column.value; y++){
            let crtTd = document.createElement('td');
            crtTr.appendChild(crtTd);
            crtTable.appendChild(crtTr);
            }
        }
        body.appendChild(crtTable);
    })
}

generateTable();