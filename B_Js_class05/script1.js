// Exercise 1
// let title = document.getElementById('title');
// let result = document.getElementById('result');

// // Function
// let weightInChickens = (input) => {
//     let total = (input * 500) / 1000;
//     title.innerHTML = `The total weigh for ${input} chicken is:`;
//     result.innerHTML = `Result: ${total} kg`; 
// }

// let input = parseInt(prompt("Enter number of chickens: "));
// weightInChickens(input);

// Homework 1
let p = document.querySelectorAll('p');
for(let i = 0; i < p.length; i++){
    p[i].innerHTML = "Change text in all paragraphs";
}

let hdr = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
for(let i = 0; i < hdr.length; i++){
    hdr[i].innerHTML = "Change text in all headers";
}