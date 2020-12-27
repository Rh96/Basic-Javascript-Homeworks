// let myApp = document.getElementById("app");
// let titleDiv = myApp.firstElementChild;
// let contentDiv = myApp.children[1];

// let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
// let subjects = ["Math", "English", "Science", "Sport"];
// let grades = ["A", "B", "A", "C"];

// // Functions
// // Print grades
// function printGrades(subjects, grades, element){
//     console.log(element);
//     element.innerHTML = ""; // clearing element
//     element.innerHTML += "<ul>";
//     for(let i=0; i < subjects.length; i++){
//         element.innerHTML += `<li>${subjects[i]}: ${grades[i]}</li>`;
//     }
//     element.innerHTML += "</ul>"
// }

// // Print Students
// function printStudents(students, element){
//     element.innerHTML = ""; // clearing element
//     element.innerHTML += "<ol>";
//     for(let student of students){
//         element.innerHTML += `<li>${student}</li>`;
//     }
//     element.innerHTML += "</ol>"
// }

// // Deciding What to show
// function academyPanel(person, name){
//     if(person === "student" && name.length >= 2){ // if its student and has name longer than 1 letter
//       titleDiv.innerHTML += "<h1><b>Hello there " + name + "</b></h1>";
//       titleDiv.innerHTML += "<p>Welcome to your student page</p>";
//       contentDiv.innerHTML += "<h3>Your grades:</h3>"
//       console.log(contentDiv);
//       printGrades(subjects, grades, contentDiv);
//     } else if(person === "teacher" && name.length >= 2){
//       titleDiv.innerHTML += `<h1><b>Hello ${name}!</b></h1>
//       <p>Welcome to your teachers page</p>`;
//       contentDiv.innerHTML += "<h3>Your students:</h3>"
//       printStudents(students, contentDiv);
//     } else {
//       titleDiv.innerHTML += "<h1><b>Your login was unsucessfull</b></h1>";
//       titleDiv.innerHTML += "<p>Please try again!</p>";
//     }
//   }

// let input = prompt("Are you a student or a teacher?");
// let name = prompt("What is your name?");
// academyPanel(input, name);

// Student Exercise 1
let slcFirstDiv = document.querySelector('#first');
let slcAllParagraphs = document.querySelectorAll('p');
let slcLastDiv = document.querySelectorAll('div')[2];
let slcLastHeader = slcLastDiv.lastElementChild;
let slcFirstHeader = slcLastDiv.firstElementChild;
let slcSecDiv = document.querySelector('.anotherDiv');
let slcFirstPInSecDiv = slcSecDiv.firstElementChild;
let addWordTxtToTxtElemInSecDiv = slcSecDiv.lastElementChild.innerHTML = "Text";
let chgTxtHdrInLastDiv = slcLastDiv.firstElementChild.innerHTML = "Change txt in header 1";
let chgTxtHdrInLastDiv1 = slcLastHeader.innerHTML = "Change txt in header 3";

// Student Exercise 2
